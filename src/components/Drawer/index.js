import React from 'react';

import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';

const handleOpen = (drawerWidth, theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const handleClose = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const styleDrawer = (drawerWidth, theme) => (
  styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...handleOpen(drawerWidth, theme),
        '& .MuiDrawer-paper': handleOpen(drawerWidth, theme),
      }),
      ...(!open && {
        ...handleClose(theme),
        '& .MuiDrawer-paper': handleClose(theme),
      }),
    }))
);

export default function Drawer({ drawerWidth, theme, children, ...props }) {
  const StyledDrawerComponent = styleDrawer(drawerWidth, theme);

  return (
    <StyledDrawerComponent {...props}>
      {children}
    </StyledDrawerComponent>
  );
}
