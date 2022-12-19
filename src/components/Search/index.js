import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

export default function Search({ setSearchQuery }) {
  return (
    <ListItem key="search" disablePadding sx={{ "& *": { color: "#f0f0f0" } }}>
      <ListItemButton sx={{ padding: "0" }}>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <TextField
          placeholder="Buscar pergunta"
          size="small"
          sx={{ background: "#F0F0F0", borderRadius: "5px" }}
        />
      </ListItemButton>
    </ListItem>
  );
}
