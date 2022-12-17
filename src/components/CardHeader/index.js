import React from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardOptions from '../../components/CardOptions';

export default function CardHeader({
  username,
  userpicture,
  time,
  resumed=true
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1em",
          alignItems: "center"
        }}
      >
        <Avatar
          alt={username}
          src={userpicture}
          sx={{ width: 50, height: 50 }}
        />
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              color: "#F0F0F0" 
            }}
          >
            {username}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#898C8E" }}>
            {time}
          </Typography>
        </Box>
      </Box>
      {!resumed && <CardOptions />}
    </Box>
  );
}
