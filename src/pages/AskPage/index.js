import React, { useEffect, useState } from "react";

import BasePage from "../BasePage";

import AskCard from "../../components/AskCard";
import AnswerCard from "../../components/AnswerCard";
import CreateAnswerInput from "../../components/CreateAnswerInput";

import { Box, CircularProgress } from "@mui/material";

import { useParams } from "react-router-dom";

import { QuestionService } from "../../services/question";

import { useSnackbar } from "notistack";

export default function AskPage({ askData }) {
  const [isLoading, setIsLoading] = useState(true);
  const [ask, setAsk] = useState(askData);
  const params = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const { id } = params;

  useEffect(() => {
    if (!askData) {
      QuestionService.searchQuestionById(id)
        .then((response) => {
          setAsk(response);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          let message = "Não foi possível se comunicar com o servidor.";
          enqueueSnackbar(message, { variant: "error" });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BasePage pageName={ask ? `Questão: ${ask.title}` : "Tela de Questão"}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            width: "75%",
            display: "flex",
            gap: "2em",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AskCard ask={ask} resumed={false} />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1em",
              alignItems: "center",
            }}
          >
            {ask.answers.map((answer, idx) => (
              <AnswerCard
                answer={answer}
                accepted={answer.solution}
                key={idx}
                resumed={false}
              />
            ))}
          </Box>
          <CreateAnswerInput questionId={ask.id} />
        </Box>
      )}
    </BasePage>
  );
}
