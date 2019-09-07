import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


const useStyles = makeStyles(theme => ({
  root: {
    padding: [[0, theme.spacing(2)]],
  },
}));


export default function DeckHeader({ deck={} }) {
  const classes = useStyles();
  return (
    <Toolbar classes={{root: classes.root}}>
      <Typography children={deck.name} variant="h6" />
    </Toolbar>
  );
}
