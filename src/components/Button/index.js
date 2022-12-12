import React from "react";

import Chip from "@mui/material/Chip";

export default function Button({ 
  label, 
  backgroundActive, 
  fontColorActive, 
  onClick, 
  isActive
}) {
  return (
    <Chip
      label={label}
      onClick={onClick}
      className={isActive ? "active" : "normal"}
      sx={{
        "&.active": {
          background: backgroundActive,
          color: fontColorActive
        }
      }}
    />
  );
}
