import React from 'react';

import { styled } from '@mui/material/styles';

const styleDrawerHeader = (theme) => (
  styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }))
);

export default function DrawerHeader({ theme, children }) {
  const StyledDrawerHeaderComponent = styleDrawerHeader(theme);

  return (
    <StyledDrawerHeaderComponent>
      {children}
    </StyledDrawerHeaderComponent>
  )
}
