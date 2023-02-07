import React, { useContext } from "react";

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import GavelIcon from "@mui/icons-material/Gavel";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

import ListItemWithIcon from "../ListItemWithIcon";
import DrawerHeader from "../DrawerHeader";
import Search from "../Search/";
import Drawer from "../Drawer";
import { AuthContext } from "../../context/AuthContext";

export default function LeftMenu({
  open,
  handleDrawerClose,
  handleDrawerOpen,
  drawerWidth,
}) {
  const theme = useTheme();
  const { token } = useContext(AuthContext);

  const commomItems = {
    "Adicionar Questão": {
      icon: <AddCircleIcon style={{ color: "#f0f0f0" }} />,
      path: "/new-ask",
      requiredLogin: true,
    },
    Questões: {
      icon: <FormatListBulletedIcon style={{ color: "#f0f0f0" }} />,
      path: "/ask",
    },
    Perfil: {
      icon: <AccountBoxIcon style={{ color: "#f0f0f0" }} />,
      path: "/profile",
      requiredLogin: true,
    },
    Regras: {
      icon: <GavelIcon style={{ color: "#f0f0f0" }} />,
      path: "/rules",
    },
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      drawerWidth={drawerWidth}
      PaperProps={{
        sx: {
          backgroundColor: "#181818",
          borderRight: "1px #F0F0F0 solid",
          zIndex: "0",
          position: "absolute",
          width: "100%",
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose} sx={{ color: "#F0F0F0" }}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Box
        sx={{
          padding: "1em",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Search
          openMenu={handleDrawerOpen}
          closeMenu={handleDrawerClose}
          open={open}
        />
      </Box>
      <Divider sx={{ borderColor: "#f0f0f0" }} />
      <List>
        {Object.keys(commomItems).map((item) => {
          const itemData = commomItems[item];
          if ((itemData.requiredLogin && token) || !itemData.requiredLogin) {
            return (
              <ListItemWithIcon
                key={item}
                text={item}
                icon={itemData.icon}
                path={itemData.path}
              />
            );
          }
          return <></>;
        })}
      </List>
    </Drawer>
  );
}
