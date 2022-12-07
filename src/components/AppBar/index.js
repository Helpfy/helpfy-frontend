import React from 'react';

import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

const styleAppBar = (drawerWidth) => (
  styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' }) (
    ({ theme, open }) => ({
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    })
  ));

export default function AppBar({ drawerWidth, children, ...props }) {
  const StyledAppBarComponent = styleAppBar(drawerWidth);

  return (
    <StyledAppBarComponent {...props}>
      {children}
    </StyledAppBarComponent>
  );
}