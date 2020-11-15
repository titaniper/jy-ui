import React from 'react';
import { ListItem, Typography, makeStyles, createStyles } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';


interface ListViewProps {
  primary: string;
  secondary: string;
  secondaryVariant: 'textButton' | 'text' | 'error';
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 36,
      borderRadius: 4,
      border: `solid 1px ${theme.palette.grey[300]}`,
      marginBottom: theme.spacing(4),
    },
    textButton: {
      marginRight: -theme.spacing(4),
    },
    text: {
      fontSize: 13,
    },
    error: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
);

const ListView: React.FC<ListViewProps> = (props: ListViewProps) => {
  const classes = useStyles(props);
  const { primary, secondary, secondaryVariant, ...otherProps } = props;

  return (
    <ListItem {...otherProps} className={classes.root}>
      <Typography variant="body2" color="textPrimary">
        {primary}
      </Typography>
      {(() => {
        switch (secondaryVariant) {
          case 'text':
            return <Typography className={classes.text}>{secondary}</Typography>;
          case 'error':
            return (
              <Typography variant="caption" color="error" className={classes.error}>
                {/* TODO: spacing 으로 디자인 안 돼 있다. 에드가 문의 후 수정 */}
                <InfoOutlinedIcon style={{ marginRight: 4, fontSize: 14 }} />
                {secondary}
              </Typography>
            );
          default:
            return null;
        }
      })()}
    </ListItem>
  );
};

ListView.displayName = 'ListView';

export { ListView };
