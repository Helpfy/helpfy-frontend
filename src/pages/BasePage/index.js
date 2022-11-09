import React, { useState } from 'react';

import Box from '@mui/material/Box';

import Header from '../../components/Header';
import LeftMenu from '../../components/LeftMenu';
import DrawerHeader from '../../components/DrawerHeader';

import { drawerWidth } from '../../constants.js';

export default function BasePage({ children }) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        drawerWidth={drawerWidth}
      />
      <LeftMenu 
        open={open} 
        handleDrawerClose={handleDrawerClose}
        drawerWidth={drawerWidth}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
