import React from "react";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ButtonBG({ text, color, background, href, onClick }) {
  return (
    <Link to={href}>
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
    </Link>
  );
}
