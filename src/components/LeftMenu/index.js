import React, { useState } from 'react';

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import LabelIcon from '@mui/icons-material/Label';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Box from '@mui/material/Box';

import SearchBar from '../Search/';
import ListItemWithIcon from '../ListItemWithIcon';

const drawerWidth = 350;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const createDrawer = (theme) => (
  styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }))
);

const createDrawerHeader = (theme) => (
  styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }))
);

export default function LeftMenu({
  open,
  handleDrawerClose 
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();
  const DrawerHeader = createDrawerHeader(theme);
  const Drawer = createDrawer(theme);

  const commomItems = {
    "Questões": <QuestionMarkIcon style={{ color: "#f0f0f0" }} />,
    "Tags": <LabelIcon style={{ color: "#f0f0f0" }} />,
    "Rankings": <MilitaryTechIcon style={{ color: "#f0f0f0" }} />
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#181818",
          borderRight: "1px #F0F0F0 solid",
          zIndex: "0",
          position: "absolute",
          width: "100%"
        }
      }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose} sx={{ color: "#F0F0F0" }}>
          {theme.direction === 'rtl' ? 
            <ChevronRightIcon /> : 
            <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Box
        sx={{
          padding: "1em",
          display: "flex", 
          justifyContent: "center" 
        }}
      >
        <SearchBar setSearchQuery={setSearchQuery} />
      </Box>
      <Divider sx={{ borderColor: "#f0f0f0" }} />
      <List>
        {Object.keys(commomItems).map(item => (
          <ListItemWithIcon 
            key={item}
            text={item}
            icon={commomItems[item]}
          />
        ))}
      </List>
    </Drawer>
  );
}
