import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Deck from '../Deck';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      '&:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
    },
  },
}));


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
