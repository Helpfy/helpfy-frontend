import React, { useContext } from "react";

import { Box, Divider } from "@mui/material";

import CardHeader from "../../components/CardHeader";
import CardContent from "../../components/CardContent";
import CardInteract from "../../components/CardInteract";
import CommentList from "../../components/CommentList";

import { CommentService } from "../../services/comment";
import { AuthContext } from "../../context/AuthContext";

import { useSnackbar } from "notistack";

export default function AnswerCard({
  answer,
  resumed = true,
  accepted = false,
}) {
  const { user, token } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();

  const handleUp = () => {
    console.log("answer upVote request :)");
  };

  const handleDown = () => {
    console.log("answer downVote request :(");
  };

  const handleComment = async (comment) => {
    const response = CommentService.commentAnswer(
      comment,
      answer.id,
      user.id,
      token
    );

    if (response.statusCode >= 400) {
      let message = "Não foi possível se comunicar com o servidor.";
      enqueueSnackbar(message, { variant: "error" });
    }

    window.location.reload(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        background: "#393E41",
        border: "1px solid #F0F0F0",
        "&.accepted": { borderLeft: "7px solid #49BE25" },
        "&.normal": { borderLeft: "1px solid #F0F0F0" },
        borderRadius: "10px",
        padding: "1.5em",
        gap: "1em",
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
          username={answer.author.name}
          userpicture={answer.author.avatarLink}
          time={answer.createdAt}
          resumed={resumed}
        />
        <CardContent tldr={answer.body} />
        <CardInteract
          numUpVotes={answer.numberLikes}
          numDownVotes={answer.numberDislikes}
          handleUp={handleUp}
          handleDown={handleDown}
          addComment={handleComment}
        />
      </Box>
      {answer.comments.length > 0 && <Divider color="#f0f0f0" />}
      <CommentList comments={answer.comments} />
    </Box>
  );
}
