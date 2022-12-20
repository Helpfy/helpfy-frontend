import React, { useState, useContext } from "react";

import Box from "@mui/material/Box";

import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

import Button from "../Button";
import { Typography } from "@mui/material";

import { AuthContext } from "../../context/AuthContext";
import { AnswerService } from "../../services/answer";

import { useSnackbar } from "notistack";

export default function CreateAnswerInput({ questionId }) {
  const [questionText, setQuestionText] = useState("");
  const { user, token } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async () => {
    const response = await AnswerService.sendAnswer(
      questionText,
      questionId,
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
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        gap: "1em",
      }}
    >
      <Typography variant="body1" fontWeight="bold" color="#F0F0F0">
        Crie uma resposta
      </Typography>
      <Box
        sx={{
          width: "95%",
        }}
      >
        <MDEditor
          value={questionText}
          onChange={setQuestionText}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
          visibleDragbar={false}
          highlightEnable={false}
          height={250}
        />
      </Box>
      <Button
        label={"Enviar"}
        background={"#1976D2"}
        fontColor={"#F0F0F0"}
        sx={{ width: "fit-content" }}
        onClick={handleSubmit}
      />
    </Box>
  );
}
