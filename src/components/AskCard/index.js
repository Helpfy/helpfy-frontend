import React, { useContext } from "react";

import { Box, Divider } from "@mui/material";

import CardHeader from "../../components/CardHeader";
import CardContent from "../../components/CardContent";
import CommentList from "../../components/CommentList";
import CardInteract from "../../components/CardInteract";
import TagList from "../../components/TagList";
import { CommentService } from "../../services/comment";
import { QuestionService } from "../../services/question";
import { AuthContext } from "../../context/AuthContext";
import { useSnackbar } from "notistack";

export default function AskCard({ ask, resumed = true, accepted = false }) {
  const { user, token } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();

  const handleUp = async () => {
    if (user && user.id) {
      const response = await QuestionService.likeQuestion(
        user.id,
        ask.id,
        token
      );
      return response;
    }
  };

  const handleDown = async () => {
    if (user && user.id) {
      const response = await QuestionService.dislikeQuestion(
        user.id,
        ask.id,
        token
      );
      return response;
    }
  };

  const handleComment = async (comment) => {
    if (user && user.id) {
      const response = CommentService.commentQuestion(
        comment,
        ask.id,
        user.id,
        token
      );
      if (response.statusCode >= 400) {
        let message = "Não foi possível se comunicar com o servidor.";
        enqueueSnackbar(message, { variant: "error" });
      }
      window.location.reload(false);
    }
  };

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
        boxSizing: "border-box",
      }}
      className={accepted ? "accepted" : "normal"}
    >
      <CardHeader
        username={ask.author.name}
        userpicture={ask.author.avatarLink}
        time={ask.author.createdAt}
        resumed={resumed}
      />
      <CardContent title={ask.title} tldr={ask.body} />
      <TagList tags={ask.tags} />
      <CardInteract
        numUpVotes={ask.numberLikes}
        numDownVotes={ask.numberDislikes}
        likesSet={ask.likes}
        dislikesSet={ask.dislikes}
        handleUp={handleUp}
        handleDown={handleDown}
        addComment={handleComment}
        resumed={resumed}
      />
      {!resumed && ask.comments.length > 0 && <Divider color="#f0f0f0" />}
      {!resumed && <CommentList comments={ask.comments} />}
    </Box>
  );
}
