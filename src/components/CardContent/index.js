import React from 'react';

import { Typography, Box } from '@mui/material';

import ReactMarkdown from 'react-markdown';

export default function CardContent({
  title,
  tldr
}) {

  return (
    <Box sx={{
      display: "flex",
      "flex-direction": "column",
      gap: "1em"
    }}>
      <Typography
        variant="body1"
        sx={{
          "font-weight": "bold",
          color: "#F0F0F0"
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ "& *": { color: "#F0F0F0" } }}>
        <ReactMarkdown
          children={tldr}
        />
      </Typography>
    </Box>
  );

}
