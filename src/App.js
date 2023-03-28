import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import Router from "./Router.js";
import { ContextProvider } from "./context/AuthContext.js";
import { SearchProvider } from "./context/SearchContext.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

const theme = createTheme({
  white: {
    main: "#F0F0F0",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        autoHideDuration={5000}
        maxSnack={1}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <SearchProvider>
          <ContextProvider>
            <GoogleOAuthProvider clientId="765141960652-1056kh7b79p9omu0f87iocrhgn9vf0t7.apps.googleusercontent.com">
              <Router />
            </GoogleOAuthProvider>
          </ContextProvider>
        </SearchProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
