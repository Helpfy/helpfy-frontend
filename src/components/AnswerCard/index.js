import React, { useState } from 'react';

import Box from '@mui/material/Box';

import CardHeader from '../../components/CardHeader';
import CardContent from '../../components/CardContent';
import CardInteract from '../../components/CardInteract';
import CommentList from '../../components/CommentList';

export default function AnswerCard({ answer, resumed = true, accepted = false }) {
  const comment = {
    user: "Jorginho Heizenhower",
    text: "Você poderia ter apenas aconselhado reinstalar o KDE. :)"
  };

  const comments = [comment, comment];

  const handleUp = () => {
    console.log("answer upVote request :)");
  };

  const handleDown = () => {
    console.log("answer downVote request :(");
  };

  const handleComment = () => {
    console.log("add answer comment request");
  }

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        background: "#393E41",
        border: "1px solid #F0F0F0",
        "&.accepted": { borderLeft: "7px solid #49BE25" },
        "&.normal": { borderLeft: "1px solid #F0F0F0" },
        borderRadius: "10px",
        padding: "1.5em",
        gap: "1em"
      }}
      className={accepted ? "accepted" : "normal"}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          boxSizing: "border-box",
        }}
        className={accepted ? "accepted" : "normal"}
      >
        <CardHeader
          username={answer.user.name}
          userpicture={answer.user.img}
          time={answer.time}
          resumed={resumed}
        />
        <CardContent tldr={answer.tldr} />
        <CardInteract
          data={answer.status}
          handleUp={handleUp}
          handleDown={handleDown}
          addComment={handleComment}
        />
      </Box>
      <CommentList comments={comments} />
    </Box>
  );
}
