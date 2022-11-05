import React, { useState } from 'react';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LabelIcon from '@mui/icons-material/Label';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

import SearchBar from '../Search/';
import ListItemWithIcon from '../ListItemWithIcon';

export default function LeftMenu({ ...props }) {
  const [searchQuery, setSearchQuery] = useState("");

  const commomItems = {
    "Questões": <QuestionMarkIcon style={{ color: "#f0f0f0" }} />,
    "Tags": <LabelIcon style={{ color: "#f0f0f0" }} />,
    "Rankings": <MilitaryTechIcon style={{ color: "#f0f0f0" }} />
  }

  return (
    <Drawer 
      variant="permanent"
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
      <Box
        sx={{
          padding: "1em",
          display: "flex", 
          "justify-content": "center" 
        }}
      >
        <SearchBar setSearchQuery={setSearchQuery} />
      </Box>
      <Divider sx={{ "border-color": "#f0f0f0" }} />
      <Box>
        <List>
          {Object.keys(commomItems).map(item => (
            <ListItemWithIcon 
              text={item}
              icon={commomItems[item]}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
