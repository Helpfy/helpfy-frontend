import React from "react";

import Button from "@mui/material/Button";

export default function ButtonBG({ text, color, background, onClick }) {
  return (
    <Button
      variant="contained"
      sx={{
        background: background,
        color: color,
        "&:hover": {
          background: background,
          filter: "brightness(85%)",
        },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
