import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Search from '../Search';


const useStyles = makeStyles(theme => ({
  root: {
    '& > :not(:last-child)': {
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        marginRight: theme.spacing(2),
      },
    },
  },
}));


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
