import Grid from '@material-ui/core/Grid';
import React from 'react';
import Deck from '../Deck';
import useStyles from './styles';


export default function Body() {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={10} className={classes.root}>
        <Deck />
      </Grid>
    </Grid>
  );
}
