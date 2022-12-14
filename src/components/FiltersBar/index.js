import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import FilterButton from "./FilterButton";

export default function FiltersBar() {
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
          icon={<AccessTimeIcon color="#F0F0F0" fontSize="small" />}
          background="#1976D2"
          fontColor="#F0F0F0"
        />
        <FilterButton
          label="Mais Votadas"
          icon={<StarOutlineIcon color="#181818" fontSize="small" />}
          background="#F0F0F0"
          fontColor="#181818"
        />
        <FilterButton
          label="Relevantes"
          icon={<WhatshotIcon color="#181818" fontSize="small" />}
          background="#F0F0F0"
          fontColor="#181818"
        />
        <FilterButton
          label="Concluídas"
          icon={<CheckCircleOutlineIcon color="#181818" fontSize="small" />}
          background="#F0F0F0"
          fontColor="#181818"
        />
      </Stack>
    </Box>
  );
}
