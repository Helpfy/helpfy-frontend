import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonBG from '../ButtonBG';

import HelpfyLogo from '../HelpfyLogo/'

export default function Header({ pageName="" }) {
  return (
    <header>
      <Box sx={{ flexGrow: 1, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <AppBar position="fixed">
          <Toolbar sx={{ height: "4em", background: "#393E41" }}>
            <HelpfyLogo />
            <Typography 
              variant="h5" 
              sx={{ 
                flexGrow: 3, 
                "margin-left": "0.5em", 
                "font-weight": "bold"
              }}
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
      </Box>
    </header>
  );
}
