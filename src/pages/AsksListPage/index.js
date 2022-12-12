import React from 'react';

import BasePage from '../BasePage';

import Box from '@mui/material/Box';

import AskCard from '../../components/AskCard';
import FiltersBar from '../../components/FiltersBar';

import img from './img.jpeg';

export default function AsksListPage() {
  const ask = {
    user: {
      picture: img,
      name: "Ruan Gomes"
    },
    time: "5 minutes ago",
    title: "Como corrigir o KDE no FreeBSD?",
    tldr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: [ "FreeBSD", "KDE" ],
    status: {
      likes: 150,
      comments: 2
    }
  }

  return (
    <BasePage pageName="Asks">
      <Box
        sx={{
          display: 'flex',
          "flex-direction": "column",
          gap: "1em",
          "align-items": "center",
          width: "75%"
        }}
      >
        <FiltersBar />
        {[ask, ask, ask].map(item => <AskCard ask={item} />)}
      </Box>
    </BasePage>
  );
}
