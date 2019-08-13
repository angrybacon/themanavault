import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Body from '../Body';
import Header from '../Header';


const useStyles = makeStyles(theme => ({
  '@global': {
    'body, html, #root': {
      height: '100%',
      margin: 0,
    },
  },
  body: {
    flexGrow: 1,
    overflowY: 'auto',
    padding: [[theme.spacing(4), 0]],
  },
  header: {
  },
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
}));


export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box children={<Header />} className={classes.header} />
      <Box children={<Body />} className={classes.body} />
    </div>
  );
};
