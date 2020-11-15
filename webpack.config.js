const path = require("path");
const {
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin,
  EnvironmentPlugin,
} = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => ({
  context: path.resolve(__dirname),
  entry: ["@babel/polyfill", "./src/styles/main.scss", "./src/index.tsx"],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      'jycore/hooks': path.resolve(__dirname, './src/hooks'),
      'jycore/styles': path.resolve(__dirname, './src/styles'),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name:
                argv.mode !== "production"
                  ? "[name].[ext]"
                  : "[contenthash].[ext]",
              outputPath: "assets",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new NoEmitOnErrorsPlugin(),
    new HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    // hot: true, // TODO: connected-react-router를 붙이니까 hmr되고나면 라우터가 작동을 하지 않는다. 아무나 찾아서 해주면 좋겠다.
    historyApiFallback: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            unused: true,
          },
          ecma: 6,
          mangle: true,
          unused: true,
        },
        sourceMap: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
});
