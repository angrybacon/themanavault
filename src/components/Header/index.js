import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Search from '../Search';


export default function Header() {
  return (
    <AppBar component="header" position="relative">
      <Toolbar>
        <Box children={<Typography children="The Mana Vault" variant="h6" />} clone mr={2} />
        <Search />
      </Toolbar>
    </AppBar>
  );
}
