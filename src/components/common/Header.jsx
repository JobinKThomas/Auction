import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ toggleDrawer }) => {
  return (
    <AppBar position="sticky" className="bg-white shadow-md">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-black">My App</Typography>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer} className="lg:hidden">
          <MenuIcon className="text-black" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
