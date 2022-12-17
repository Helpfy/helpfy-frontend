import React, { useState } from 'react';

import Box from '@mui/material/Box';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import Button from '../../components/Button';
import CardHeader from '../../components/CardHeader';
import CardContent from '../../components/CardContent';
import CommentList from '../../components/CommentList';
import { Stack, Chip } from '@mui/material';

export default function AskCard({ ask, resumed = true, accepted = false }) {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);

  const handleUpvote = () => {
    setDownvote(false);
    setUpvote(!upvote);
  };

  const handleDownvote = () => {
    setUpvote(false);
    setDownvote(!downvote);
  };

  const comment = {
    user: "Jorginho Heizenhower",
    text: "Você poderia ter apenas aconselhado reinstalar o KDE. :)"
  };

  const comments = [comment, comment];

  return (
    <Box
      sx={{
        width: "100%",
        background: "#393E41",
        border: "1px solid #F0F0F0",
        padding: "1.5em",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        boxSizing: "border-box"
      }}
      className={accepted ? "accepted" : "normal"}
    >
      <CardHeader
        username={ask.user.name}
        userpicture={ask.user.img}
        time={ask.time}
        resumed={resumed}
      />
      <Stack direction="row" spacing={1}>
        {ask.tags.map((tag, i) => (
          <Chip
            label={tag}
            key={`${tag}${i}`}
            sx={{
              background: "#1976D2",
              color: "#F0F0F0"
            }}
          />
        ))}
      </Stack>
      <CardContent
        title={ask.title}
        tldr={ask.tldr}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "1em",
        }}
      >
        <Button
          label={ask.status.likes}
          icon={<ArrowUpwardIcon color="white" fontSize="small" />}
          background={"#49BE25"}
          fontColor={"#181818"}
          onClick={handleUpvote}
          isActive={upvote}
        />
        <Button
          label={ask.status.comments}
          icon={<ArrowDownwardIcon color="white" fontSize="small" />}
          background={"#E80000"}
          fontColor={"#181818"}
          onClick={handleDownvote}
          isActive={downvote}
        />
      </Box>
      <CommentList comments={comments} />
    </Box>
  );
}
