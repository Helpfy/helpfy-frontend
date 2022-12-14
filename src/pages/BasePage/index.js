import React, { useState } from "react";

import Box from "@mui/material/Box";

import Header from "../../components/Header";
import LeftMenu from "../../components/LeftMenu";

import { drawerWidth } from "../../constants.js";

export default function BasePage({
  children,
  pageName,
  withoutLeftMenu = false,
}) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Header
        handleDrawerOpen={!withoutLeftMenu ? handleDrawerOpen : undefined}
        open={!withoutLeftMenu ? open : undefined}
        drawerWidth={!withoutLeftMenu ? drawerWidth : undefined}
        pageName={pageName}
      />
      {!withoutLeftMenu && (
        <LeftMenu
          open={open}
          handleDrawerClose={handleDrawerClose}
          drawerWidth={drawerWidth}
        />
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          overflow: "auto",
          marginTop: "64px",
          background: "#181818",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
