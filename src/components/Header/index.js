import React, { useContext } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import HelpfyLogo from "../HelpfyLogo";
import ButtonBG from "../ButtonBG";
import AppBar from "../AppBar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import imageDefault from "../../assets/perfil_not_found.png";
import imageNotFound from "../../assets/link_not_valid.jpg";
import { Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";

export default function Header({
  open,
  handleDrawerOpen,
  drawerWidth,
  pageName = "",
  logout,
}) {
  const { user, logoutUser } = useContext(AuthContext);

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
          {!user ? (
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
          ) : (
            <Box
              display="flex"
              justifyContent="flex-end"
              sx={{ display: "flex", gap: "1em" }}
            >
              {!logout && (
                <Link to="/profile">
                  <Avatar
                    sx={{
                      bgcolor: "#f0f0f0",
                      width: "2rem",
                      height: "2rem",
                    }}
                    src={user.avatarLink || imageDefault}
                    alt={`Profile image of ...`}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#f0f0f0",
                        width: "3rem",
                        height: "3rem",
                      }}
                      src={imageNotFound}
                    />
                  </Avatar>
                </Link>
              )}
              {logout && (
                <ButtonBG
                  text="Sair"
                  color="#181818"
                  background="#F0F0F0"
                  onClick={logoutUser}
                  href="/"
                />
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
}
