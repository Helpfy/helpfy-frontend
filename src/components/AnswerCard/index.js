import React, { useContext, useState } from "react";
import { Box, Divider } from "@mui/material";
import CardHeader from "../../components/CardHeader";
import CardContent from "../../components/CardContent";
import CardInteract from "../../components/CardInteract";
import CommentList from "../../components/CommentList";
import { CommentService } from "../../services/comment";
import { AuthContext } from "../../context/AuthContext";
import { AnswerService } from "../../services/answer";
import { QuestionService } from "../../services/question";
import { useSnackbar } from "notistack";

export default function AnswerCard({
  answer,
  ask,
  resumed = true,
  accepted = false,
  getAsk,
}) {
  const { user, token } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();
  const [isEditing, setIsEditing] = useState(false);

  const handleUp = async () => {
    if (user && user.id) {
      const response = await AnswerService.likeAnswer(
        user.id,
        answer.id,
        token
      );
      return response;
    }
  };

  const handleDown = async () => {
    if (user && user.id) {
      const response = await AnswerService.dislikeAnswer(
        user.id,
        answer.id,
        token
      );
      return response;
    }
  };

  const handleComment = async (comment) => {
    if (user && user.id) {
      const response = await CommentService.commentAnswer(
        comment,
        answer.id,
        user.id,
        token
      );
      if (response.statusCode >= 400) {
        let message = "Não foi possível se comunicar com o servidor.";
        enqueueSnackbar(message, { variant: "error" });
      }
      getAsk();
    }
  };

  const deleteAnswer = async () => {
    if (user && user.id) {
      const response = await AnswerService.delete(answer.id, token);
      if (response.statusCode >= 400) {
        let message = "Não foi possível se comunicar com o servidor.";
        enqueueSnackbar(message, { variant: "error" });
      }
      enqueueSnackbar("Resposta deletada com sucesso.", { variant: "success" });
      getAsk();
    }
  };

  const acceptAnswer = async () => {
    if (user && user.id) {
      const responseAnswer = await AnswerService.accept(answer.id, token);

      let responseQuestion;
      if (!ask.answered) {
        responseQuestion = await QuestionService.accept(ask.id, token);
      }

      if (
        responseAnswer.statusCode >= 400 ||
        (responseQuestion && responseQuestion.statusCode >= 400)
      ) {
        let message = "Não foi possível se comunicar com o servidor.";
        enqueueSnackbar(message, { variant: "error" });
      }
      enqueueSnackbar("Resposta aceita com sucesso.", { variant: "success" });
      getAsk();
    }
  };

  const editAnswerSubmit = async (event, questionText) => {
    event.preventDefault();
    setIsEditing(false);
    const body = {
      body: questionText,
    };
    const response = await AnswerService.update(answer.id, body, token);
    let message = "Resposta editada com sucesso.";
    if (response.statusCode >= 400) {
      message = "Não foi possível se comunicar com o servidor.";
      enqueueSnackbar(message, { variant: "error" });
    }
    enqueueSnackbar(message, { variant: "success" });
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
          askAuthor={ask.author}
          username={answer.author.name}
          userpicture={answer.author.avatarLink}
          time={answer.createdAt}
          resumed={resumed}
          author={answer.author}
          deleteOption={deleteAnswer}
          editOption={() => {
            setIsEditing(true);
          }}
          acceptAnswer={acceptAnswer}
        />
        <CardContent
          tldr={answer.body}
          editContent={editAnswerSubmit}
          isEditing={isEditing}
          cancelEdit={() => {
            setIsEditing(false);
          }}
        />
        {!isEditing && (
          <CardInteract
            numUpVotes={answer.numberLikes}
            numDownVotes={answer.numberDislikes}
            likesSet={answer.likes}
            dislikesSet={answer.dislikes}
            handleUp={handleUp}
            handleDown={handleDown}
            addComment={handleComment}
          />
        )}
      </Box>
      {answer.comments.length > 0 && <Divider color="#f0f0f0" />}
      <CommentList comments={answer.comments} />
    </Box>
  );
}
