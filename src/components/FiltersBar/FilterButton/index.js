import React from "react";

import Chip from "@mui/material/Chip";

export default function FilterButton({
  icon,
  label,
  background,
  fontColor,
  onClick
}) {
  return (
    <Chip
      id="filter-buttons"
      label={label}
      icon={icon}
      sx={{
        color: fontColor,
        background: background,
        fontSize: "18px",
        "&:hover": {
          background: background,
          filter: "brightness(0.95)",
        },
      }}
      onClick={onClick}
      clickable
    />
  );
}
