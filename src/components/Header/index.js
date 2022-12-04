import React from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import HelpfyLogo from '../HelpfyLogo';
import ButtonBG from '../ButtonBG';
import AppBar from '../AppBar';

export default function Header({ 
  open, 
  handleDrawerOpen, 
  drawerWidth ,
  pageName=""
}) {
    return (
    <header>
      <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
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
            sx={{ flexGrow: 3 }}
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
