import React from 'react';

import { Link } from "react-router-dom";

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function ListItemWithIcon({ text, icon, path }) {
  return (
    <Link to={path}>
      <ListItem
        key={text}
        disablePadding
        sx={{ "& *": { color: "#f0f0f0" } }}
      >
        <ListItemButton>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );

}
