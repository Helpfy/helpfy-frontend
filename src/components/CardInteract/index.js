import React, { useState } from 'react';

import Button from '../Button';

import Box from '@mui/material/Box';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

export default function CardInteractions({
  data,
  handleUp, //funcoes que vao fazer a requisicao de up e down
  handleDown,
  addComment, //funcao de enviar comentario
  resumed = false
}) {

  const { numUpVotes, numDownVotes } = data;

  const [upvote, setUpvote] = useState(numUpVotes);
  const [downvote, setDownvote] = useState(numDownVotes);
  const [typeButtonPressed, setTypeButtonPressed] = useState();

  const [commenting, setCommenting] = useState(false);

  const verifyTypeButtons = (clickedType) => {
    if (!typeButtonPressed) {
      setTypeButtonPressed(clickedType);
      return { target: 1, second: 0 };
    }

    if (typeButtonPressed === clickedType) {
      setTypeButtonPressed(null);
      return { target: -1, second: 0 };
    }

    if (typeButtonPressed !== clickedType) {
      setTypeButtonPressed(clickedType);
      return { target: 1, second: -1 };
    }
  }

  const handleUpvote = () => {
    handleUp();

    const votes = verifyTypeButtons("up");

    setDownvote(downvote + votes.second);
    setUpvote(upvote + votes.target);
  };

  const handleDownvote = () => {
    handleDown();

    const votes = verifyTypeButtons("down");

    setUpvote(upvote + votes.second);
    setDownvote(downvote + votes.target);
  };

  const handleCommenting = () => {
    setCommenting(!commenting);
  }

  const handleComment = () => {
    addComment();
  }

  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: ".5em",
      "&.border": {
        borderBottom: "1px solid #F0F0F0",
        paddingBottom: "1em",
      }
    }}
      className={resumed ? "no-border" : "border"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          gap: ".25em"
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
            label={upvote}
            icon={<ArrowUpwardIcon color="white" fontSize="small" />}
            background={"#49BE25"}
            fontColor={"#181818"}
            onClick={!resumed && handleUpvote}
            isActive={typeButtonPressed === 'up'}
          />
          <Button
            label={downvote}
            icon={<ArrowDownwardIcon color="white" fontSize="small" />}
            background={"#E80000"}
            fontColor={"#181818"}
            onClick={!resumed && handleDownvote}
            isActive={typeButtonPressed === 'down'}
          />
        </Box>
        {!resumed && <Button
          label={"Comentar"}
          background={"#1976D2"}
          fontColor={"#F0F0F0"}
          onClick={handleCommenting}
          isActive={commenting}
        />}
      </Box>
      {commenting && (
        <TextField
          sx={{
            width: "100%",
            borderRadius: "5px",
            color: "white",
            background: "#F0F0F0"
          }}
          size="small"
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleComment} >
                <SendIcon sx={{ color: "#1976D2" }} fontSize="small" />
              </IconButton>
            )
          }}
          multiline
        />
      )}
    </Box>
  );
}
