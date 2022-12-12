import React, { useState } from 'react';

import Box from '@mui/material/Box';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Divider from '@mui/material/Divider';

import Button from '../../components/Button';
import CardHeader from '../../components/CardHeader';
import CardContent from '../../components/CardContent';
import CommentList from '../../components/CommentList';

import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

export default function AnswerCard({ answer, resumed = true, accepted = false }) {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [answering, setAnswering] = useState(false);

  const comment = {
    user: "Jorginho Heizenhower",
    text: "Você poderia ter apenas aconselhado reinstalar o KDE. :)"
  };

  const comments = [comment, comment];

  const handleUpvote = () => {
    setDownvote(false);
    setUpvote(!upvote);
  };

  const handleDownvote = () => {
    setUpvote(false);
    setDownvote(!downvote);
  };

  const handleAnswering = () => {
    setAnswering(!answering);
  }

  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "#393E41",
          border: "1px solid #F0F0F0",
          padding: "1.5em",
          "border-radius": "10px",
          display: "flex",
          "flex-direction": "column",
          gap: "1em",
          "border-left": "7px solid #1976D2",
          "&.accepted": { "border-left": "7px solid #49BE25" },
          "&.normal": { "border-left": "7px solid #1976D2" }
        }}
        className={accepted ? "accepted" : "normal"}
      >
        <CardHeader
          username={answer.user.name}
          userpicture={answer.user.img}
          time={answer.time}
          resumed={resumed}
        />
        <CardContent
          tldr={answer.tldr}
        />
        <Divider sx={{ borderColor: "#F0F0F0" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "1em",
            }}
          >
            <Button
              label={answer.status.likes}
              icon={<ArrowUpwardIcon color="white" fontSize="small" />}
              background={"#49BE25"}
              fontColor={"#181818"}
              onClick={handleUpvote}
              isActive={upvote}
            />
            <Button
              label={answer.status.comments}
              icon={<ArrowDownwardIcon color="white" fontSize="small" />}
              background={"#E80000"}
              fontColor={"#181818"}
              onClick={handleDownvote}
              isActive={downvote}
            />
          </Box>
          <Button
            label={"Responder"}
            background={"#1976D2"}
            fontColor={"#F0F0F0"}
            onClick={handleAnswering}
            isActive={answering}
          />
        </Box>
        {answering && (
          <TextField
            sx={{
              borderRadius: "5px",
              color: "white",
              background: "#F0F0F0",
              fontSize: "16px"
            }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SendIcon sx={{ color: "#1976D2" }} fontSize="small" />
                </IconButton>
              )
            }}
            multiline
          />
        )}
      </Box>
      <CommentList comments={comments} />
    </>
  );
}