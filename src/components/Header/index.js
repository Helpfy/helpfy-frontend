import React from "react";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

import HelpfyLogo from "../HelpfyLogo";
import ButtonBG from "../ButtonBG";
import AppBar from "../AppBar";
import { Link } from "react-router-dom";

export default function Header({
  open,
  handleDrawerOpen,
  drawerWidth,
  pageName = "",
}) {
  return (
    <header>
      <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
        <Toolbar sx={{ height: "64px", background: "#393E41" }}>
          {handleDrawerOpen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Link to={"/"}>
            <IconButton color="inherit" edge="start" size="large">
              <HelpfyLogo />
            </IconButton>
          </Link>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 3 }}>
            Helpfy
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 3 }}>
            {pageName}
          </Typography>
          <Box
            display="flex"
            justifyContent="flex-end"
            sx={{ display: "flex", gap: "0.5em" }}
          >
            <ButtonBG
              href="/register"
              text="Registrar"
              color="#F0F0F0"
              background="#217CCB"
            />
            <ButtonBG
              href="/login"
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
