import React from 'react';

import BasePage from '../BasePage';

import Box from '@mui/material/Box';

import AskCard from '../../components/AskCard';
import AnswerCard from '../../components/AnswerCard';
import CreateAnswerInput from '../../components/CreateAnswerInput';

import { Typography, Divider } from '@mui/material';

export default function AskPage() {
  const ask = {
    user: {
      name: "Ruan Gomes"
    },
    time: "5 minutes ago",
    title: "Como corrigir o KDE no FreeBSD?",
    tldr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["FreeBSD", "KDE"],
    status: {
      likes: 150,
      comments: 2
    }
  };

  const answer = {
    user: {
      name: "Josiscleiton Gonzalez"
    },
    time: "1 minute ago",
    tldr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    status: {
      likes: 1,
      comments: 0
    }
  };

  const commentUser = "Jorginho Aizenhower"

  return (
    <BasePage pageName={ask.title}>
      <Box
        sx={{
          width: "75%",
          display: "flex",
          gap: "2em",
          "flex-direction": "column",
          "align-items": "center"
        }}
      >
        <AskCard ask={ask} resumed={false} />
        <Box
          sx={{
            display: "flex",
            "flex-direction": "column",
            gap: "1em",
            "align-items": "center", width: "90%"
          }}
        >
          <AnswerCard answer={answer} accepted />
          <AnswerCard answer={answer} />
          <AnswerCard answer={answer} />
        </Box>
        <CreateAnswerInput />
      </Box>
    </BasePage>
  );
}
