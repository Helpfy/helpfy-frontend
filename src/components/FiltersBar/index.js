import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function AnswersListPage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack 
        direction="row"
        spacing={1}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Chip 
          label="Novas"
          icon={<AccessTimeIcon color="#F0F0F0" fontSize="small" />}
          sx={{ color: "#F0F0F0", background: "#1976D2", "font-size": "18px" }}
          clickable
        />
        <Chip 
          label="Mais Votadas"
          icon={<StarOutlineIcon color="#181818" fontSize="small" />}
          sx={{ color: "#181818", background: "#F0F0F0", "font-size": "18px" }}
          clickable
        />
        <Chip 
          label="Relevantes"
          icon={<WhatshotIcon color="#181818" fontSize="small" />}
          sx={{ color: "#181818", background: "#F0F0F0", "font-size": "18px" }}
          clickable
        />
        <Chip 
          label="Concluídas"
          icon={<CheckCircleOutlineIcon color="#181818" fontSize="small" />}
          sx={{ color: "#181818", background: "#F0F0F0", "font-size": "18px" }}
          clickable
        />
      </Stack>
    </Box>
  );
}
