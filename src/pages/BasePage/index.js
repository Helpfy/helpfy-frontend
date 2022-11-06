import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from '../../components/Header';
import LeftMenu from '../../components/LeftMenu';

const createDrawerHeader = () => (
  styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }))
);

// TODO: colocar funcoes de criacao 
//  em arquivos de util (adicionar importacoes se necessário)
// TODO: Colocar constantes como drawerWidth em arquivo de constantes

const drawerWidth = 350;
export default function BasePage() {

  const [open, setOpen] = useState(false);
  const DrawerHeader = createDrawerHeader();

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
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
        </Typography>
        <Typography paragraph>
        </Typography>
      </Box>
    </Box>
  );
}
