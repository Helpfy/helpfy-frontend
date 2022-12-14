import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Router from "./Router.js";

const theme = createTheme({
  white: {
    main: "#F0F0F0",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
