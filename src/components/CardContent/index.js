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
      flexDirection: "column",
      gap: "1em"
    }}>
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          color: "#F0F0F0"
        }}
      >
        {title}
      </Typography>
      <Box sx={{ "& *": { color: "#F0F0F0" } }}>
        <ReactMarkdown
          children={tldr}
        />
      </Box>
    </Box>
  );

}
