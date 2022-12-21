import React, { useCallback, useContext, useEffect, useState } from "react";

import Button from "../Button";

import Box from "@mui/material/Box";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { AuthContext } from "../../context/AuthContext";

export default function CardInteractions({
  numUpVotes,
  numDownVotes,
  likesSet,
  dislikesSet,
  handleUp,
  handleDown,
  addComment,
  resumed = false,
}) {
  const [upvote, setUpvote] = useState(numUpVotes);
  const [downvote, setDownvote] = useState(numDownVotes);
  const [typeButtonPressed, setTypeButtonPressed] = useState();
  const [commenting, setCommenting] = useState(false);
  const [comment, setComment] = useState("");
  const { user } = useContext(AuthContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setButtonPressed = useCallback((likes, dislikes) => {
    if (!user?.id) {
      return;
    }
    if (likes.includes(user.id)) {
      setTypeButtonPressed("up");
    } else if (dislikes.includes(user.id)) {
      setTypeButtonPressed("down");
    } else {
      setTypeButtonPressed(undefined);
    }
  });

  useEffect(() => {
    setButtonPressed(likesSet, dislikesSet);
  }, [dislikesSet, likesSet, setButtonPressed]);

  const handleUpvote = async () => {
    if (user && user.id) {
      const { numberDislikes, dislikes, likes, numberLikes } = await handleUp();
      setUpvote(numberLikes);
      setDownvote(numberDislikes);
      setButtonPressed(likes, dislikes);
    }
  };

  const handleDownvote = async () => {
    if (user && user.id) {
      const { numberDislikes, dislikes, likes, numberLikes } =
        await handleDown();
      setUpvote(numberLikes);
      setDownvote(numberDislikes);
      setButtonPressed(likes, dislikes);
    }
  };

  const handleCommenting = () => {
    setCommenting(!commenting);
  };

  const handleComment = () => {
    addComment(comment);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: ".5em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          gap: ".25em",
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
            onClick={!resumed ? handleUpvote : undefined}
            isActive={typeButtonPressed === "up"}
          />
          <Button
            label={downvote}
            icon={<ArrowDownwardIcon color="white" fontSize="small" />}
            background={"#E80000"}
            fontColor={"#181818"}
            onClick={!resumed ? handleDownvote : undefined}
            isActive={typeButtonPressed === "down"}
          />
        </Box>
        {!resumed && user && (
          <Button
            label={"Comentar"}
            background={"#1976D2"}
            fontColor={"#F0F0F0"}
            onClick={handleCommenting}
            isActive={commenting}
          />
        )}
      </Box>
      {commenting && (
        <TextField
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{
            width: "100%",
            borderRadius: "5px",
            color: "white",
            background: "#F0F0F0",
          }}
          size="small"
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleComment}>
                <SendIcon sx={{ color: "#1976D2" }} fontSize="small" />
              </IconButton>
            ),
          }}
          multiline
        />
      )}
    </Box>
  );
}
