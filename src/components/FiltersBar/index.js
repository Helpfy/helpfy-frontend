import React, { useContext } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import FilterButton from "./FilterButton";

import { SearchService } from "../../services/search";

import { SearchContext } from "../../context/SearchContext";

export default function FiltersBar() {
  const {
    filter,
    setFilter,
    setAsks,
    setIsLoading
  } = useContext(SearchContext);

  const changeFilter = async (filter) => {
    setFilter(filter);
    setIsLoading(true);

    const asks = await SearchService.searchByFilter(filter);

    setAsks(asks.data);
    setIsLoading(false);
  };

  const getColorByFilter = (selFilter) => {
    return filter === selFilter ? "#F0F0F0" : "#181818";
  }

  const getBackgroundByFilter = (selFilter) => {
    return filter === selFilter ? "#1976D2" : "#F0F0F0";
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <FilterButton
          label="Novas"
          icon={
            <AccessTimeIcon 
              color={getColorByFilter('new')}
              fontSize="small" 
            />
          }
          onClick={() => changeFilter('new')}
          background={getBackgroundByFilter('new')}
          fontColor={getColorByFilter('new')}
        />
        <FilterButton
          label="Mais Votadas"
          icon={
            <StarOutlineIcon
              color={getColorByFilter('vote')}
              fontSize="small"
            />
          }
          onClick={() => changeFilter('vote')}
          background={getBackgroundByFilter('vote')}
          fontColor={getColorByFilter('vote')}
        />
        <FilterButton
          label="Relevantes"
          icon={
            <WhatshotIcon
              color={getColorByFilter('relevant')}
              fontSize="small" 
            />
          }
          onClick={() => changeFilter('relevant')}
          background={getBackgroundByFilter('relevant')}
          fontColor={getColorByFilter('relevant')}
        />
        <FilterButton
          label="Concluídas"
          icon={
            <CheckCircleOutlineIcon
              color={getColorByFilter('answered')}
              fontSize="small" 
            />
          }
          onClick={() => changeFilter('answered')}
          background={getBackgroundByFilter('answered')}
          fontColor={getColorByFilter('answered')}
        />
      </Stack>
    </Box>
  );
}
