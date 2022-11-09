import React, { useState } from 'react';

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import LabelIcon from '@mui/icons-material/Label';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Box from '@mui/material/Box';

import ListItemWithIcon from '../ListItemWithIcon';
import DrawerHeader from '../DrawerHeader';
import SearchBar from '../Search/';
import Drawer from '../Drawer';

export default function LeftMenu({
  open,
  handleDrawerClose,
  drawerWidth
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();

  const commomItems = {
    "Questões": <QuestionMarkIcon style={{ color: "#f0f0f0" }} />,
    "Tags": <LabelIcon style={{ color: "#f0f0f0" }} />,
    "Rankings": <MilitaryTechIcon style={{ color: "#f0f0f0" }} />
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
