import React from "react";

import Chip from "@mui/material/Chip";

export default function Button({ 
  label, 
  background, 
  fontColor, 
  onClick, 
  isActive,
  icon
}) {
  return (
    <Chip
      label={label}
      onClick={onClick}
      className={isActive ? "active" : "normal"}
      icon={icon}
      sx={{
        border: "solid 1px #F0F0F0",
        borderRadius: "5px",
        color: "#F0F0F0",
        "&.active": {
          background: background,
          color: fontColor
        }
      }}
    />
  );
}
