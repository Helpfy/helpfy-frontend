import React from 'react';

import Chip from '@mui/material/Chip';

export default function FilterButton({ icon, label, background, fontColor }) {
  return (
    <Chip 
      label={label}
      icon={icon}
      sx={{ 
        color: fontColor,
        background: background,
        "font-size": "18px",
        "&:hover": { 
          background: background,
          filter: "brightness(0.95)"
        } 
      }}
      clickable
    />
  );
}
