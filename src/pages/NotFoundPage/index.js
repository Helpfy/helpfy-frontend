import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ButtonBG from "../../components/ButtonBG";

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#181818"
      }}
    >
      <Typography
        variant="h1"
        color="#F0F0F0"
        fontWeight="bold"
        background="blue"
      >404</Typography>
      <Typography variant="h6" color="#F0F0F0">
        A página que você está procurando não existe.
      </Typography>
      <ButtonBG text={"Voltar para Home"} href={"/"} />
    </Box>
  );
}
