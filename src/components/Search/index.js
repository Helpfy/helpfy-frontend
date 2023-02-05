import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

import {
  FormControl,
  ListItem,
  ListItemIcon,
  OutlinedInput,
} from "@mui/material";

import { SearchService } from "../../services/search";

export default function Search({ open, openMenu, closeMenu }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (searchQuery.length > 0) {
      const asks = await SearchService.searchByTitle(searchQuery);
      closeMenu();
      navigate("/ask", { state: { asks: asks } });
    }
  };

  return (
    <ListItem
      key="search"
      disablePadding
      sx={{
        background: "#181818",
        "& *": { color: "#f0f0f0" },
        padding: ".1em 0",
      }}
    >
      <ListItemIcon
        onClick={open ? handleSearch : openMenu}
        sx={{ cursor: "pointer" }}
      >
        <SearchIcon />
      </ListItemIcon>
      <FormControl>
        <OutlinedInput
          sx={{ background: "#F0F0F0", borderRadius: "5px" }}
          type={"text"}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          size="small"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </FormControl>
    </ListItem>
  );
}
