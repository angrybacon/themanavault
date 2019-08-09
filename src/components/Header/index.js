import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


const useStyles = makeStyles(() => ({
  root: {
  },
}));


export default function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} component="header" position="relative">
      <Toolbar>
        <Typography children="The Mana Vault" variant="h6" />
      </Toolbar>
    </AppBar>
  );
}
