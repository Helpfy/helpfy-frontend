import React from 'react';

import Box from '@mui/material/Box';

import CardHeader from '../../components/CardHeader';
import CardContent from '../../components/CardContent';
import CommentList from '../../components/CommentList';
import CardInteract from '../../components/CardInteract';
import TagList from '../../components/TagList';

export default function AskCard({ ask, resumed = true, accepted = false }) {
  const handleUp = () => {
    console.log("ask upVote request :)");
  };

  const handleDown = () => {
    console.log("ask downVote request :(");
  };

  const handleComment = () => {
    console.log("add ask comment request");
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
      <CardContent
        title={ask.title}
        tldr={ask.tldr}
      />
      <TagList tags={ask.tags} />
      <CardInteract
        data={ask.status}
        handleUp={handleUp}
        handleDown={handleDown}
        addComment={handleComment}
        resumed={resumed}
      />
      {!resumed && <CommentList comments={comments} />}
    </Box>
  );
}
