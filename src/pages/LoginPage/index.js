import { React, useState } from "react";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import BasePage from "../BasePage";
import FormLogin from "../../components/FormLogin";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  return (
    <BasePage pageName="Entrar" withoutLeftMenu={true}>
      <Box
        alignItems="center"
        justifyContent="center"
        margin={"auto"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          alignItems: "center",
          width: "75%",
          filter: "brightness(1)",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                color={"#f0f0f0"}
                fontWeight={"bold"}
              >
                Entre na comunidade Helpfy
              </Typography>
              <Typography
                component="p"
                paragraph={true}
                color={"#f0f0f0"}
                textAlign="center"
              >
                Obtenha mais recursos e privilégios ingressando na comunidade de
                estudantes!
              </Typography>
              <FormLogin setLoading={setLoading} loading={loading} />
            </Box>
          </Container>
        )}
      </Box>
    </BasePage>
  );
}
