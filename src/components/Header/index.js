import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Search from '../Search';
import useStyles from './styles';


export default function Header() {
  const desktop = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const classes = useStyles();
  return (
    <AppBar component="header" position="relative">
      <Toolbar classes={{root: classes.root}}>
        {desktop && <Typography children="The Mana Vault" variant="h6" />}
        <Search />
      </Toolbar>
    </AppBar>
  );
}
