import Box from '@material-ui/core/Box';
import React from 'react';
import Body from '../Body';
import Header from '../Header';
import useStyles from './styles';


export default function Application() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box children={<Header />} className={classes.header} />
      <Box children={<Body />} className={classes.body} />
    </div>
  );
}
