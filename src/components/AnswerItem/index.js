import React from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

export default function AnswerItem({ answer }) {
  return (
    <Box
      sx={{
        background: "#393E41",
        width: "90%",
        border: "1px solid #F0F0F0",
        padding: "1.5em",
        "border-radius": "10px",
        display: "flex",
        "flex-direction": "column",
        gap: "1em"
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1em",
          "align-items": "center"
        }}
      >
        <Avatar
          alt={answer.user.name}
          src={answer.user.img}
          sx={{ width: 50, height: 50 }}
        />
        <Typography variant="subtitle1" sx={{ "font-weight": "bold", color: "#F0F0F0" }}>
          {answer.user.name}
          <Typography variant="subtitle2" sx={{ color: "#898C8E" }}>
            {answer.time}
          </Typography>
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ "font-weight": "bold", color: "#F0F0F0" }}>
        {answer.title}
        <Typography variant="body2" sx={{ color: "#F0F0F0", marginTop: ".5em" }}>
          {answer.tldr}
        </Typography>
      </Typography>
      <Stack direction="row" spacing={1}>
        {answer.tags.map(item => <Chip label={item} color="primary" />)}
      </Stack>
      <Box>
        <Chip
          label={answer.status.likes}
          icon={<ArrowUpwardIcon color="white" />}
          sx={{ color: "#F0F0F0", background: "#393E41", "font-size": "18px" }}
        />
        <Chip
          label={answer.status.comments}
          icon={<ModeCommentIcon color="white" />}
          sx={{ color: "#F0F0F0", background: "#393E41", "font-size": "18px" }}
        />
      </Box>
    </Box>
  );
}
