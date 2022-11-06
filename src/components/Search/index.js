import React from 'react';

import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

export default function Search({ setSearchQuery }) {
  return (
    <form>
      <TextField
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder="Buscar pergunta"
        size="small"
        sx={{ background: "#F0F0F0", "border-radius": "5px" }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon 
          style={{
            fill: "#F0F0F0",
          }} 
        />
      </IconButton>
    </form>
  );
}
