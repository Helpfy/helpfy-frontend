import React from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import HelpfyLogo from '../HelpfyLogo';
import ButtonBG from '../ButtonBG';

const createAppBar = (drawerWidth) => (
  styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' }) (
    ({ theme, open }) => ({
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    })
  ));

export default function Header({ open, handleDrawerOpen, pageName="", drawerWidth }) {
  const AppBar = createAppBar(drawerWidth);
  return (
    <header>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ height: "4em", background: "#393E41" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            edge="start"
            size="large"
          >
            <HelpfyLogo />
          </IconButton>
          <Typography 
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 3 }}
          >
            Helpfy 
          </Typography>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 10,
            }}
          >
            {pageName}
          </Typography>
          <Box 
            display="flex"
            justifyContent="flex-end"
            sx={{display: "flex", gap: "0.5em"}}
          >
            <ButtonBG
              text="Registrar"
              color="#F0F0F0"
              background="#217CCB"
            />
            <ButtonBG
              text="Entrar"
              color="#181818"
              background="#F0F0F0"
            />
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
}
