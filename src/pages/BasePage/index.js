import React, { useState } from 'react';

import Box from '@mui/material/Box';

import Header from '../../components/Header';
import LeftMenu from '../../components/LeftMenu';

import { drawerWidth } from '../../constants.js';

export default function BasePage({ children, pageName }) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', height: "100vh"}}>
      <Header
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        drawerWidth={drawerWidth}
        pageName={pageName}
      />
      <LeftMenu 
        open={open} 
        handleDrawerClose={handleDrawerClose}
        drawerWidth={drawerWidth}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: "auto", "margin-top": "80px", background: "grey" }}>
        {children}
      </Box>
    </Box>
  );
}
