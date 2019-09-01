import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
      <Grid item xs={12} sm={10} md={8} className={classes.root}>
        <Paper children={<Deck />} />
      </Grid>
    </Grid>
  );
}
