import React from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function CommentCard({ text, user }) {
  return (
    <Box
      sx={{
        padding: "0.5em 0",
        display: "flex",
        flexDirection: "column",
        gap: "0.5em"
      }}
    >
      <Typography color="#F0F0F0" variant="body2" fontWeight="bold">
        @{user}
      </Typography>
      <Typography color="#F0F0F0" variant="body2">
        {text}
      </Typography>
    </Box>
  );
}
