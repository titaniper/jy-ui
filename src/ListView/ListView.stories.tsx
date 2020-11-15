import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Box } from '@material-ui/core';
import { ListView } from './ListView';

storiesOf('@ceed/core/ListView', module)
  .addDecorator(jsxDecorator)
  .addDecorator((storyFn) => <Box style={{ width: 500 }}>{storyFn()}</Box>)
  .add('List view/Slim/Text Button', () => (
    <ListView primary="List item" secondary="TEXT" secondaryVariant="textButton" />
  ));

storiesOf('@ceed/core/ListView', module)
  .addDecorator(jsxDecorator)
  .addDecorator((storyFn) => <Box style={{ width: 500 }}>{storyFn()}</Box>)
  .add('List view/Slim/Text', () => <ListView primary="List item" secondary="TEXT" secondaryVariant="text" />);

storiesOf('@ceed/core/ListView', module)
  .addDecorator(jsxDecorator)
  .addDecorator((storyFn) => <Box style={{ width: 500 }}>{storyFn()}</Box>)
  .add('List view/Slim/Error', () => <ListView primary="List item" secondary="TEXT" secondaryVariant="error" />);
