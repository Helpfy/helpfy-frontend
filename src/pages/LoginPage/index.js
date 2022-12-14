import { React, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import BasePage from "../BasePage";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const linkStyle = {
    margin: 0,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.43",
    letterSpacing: "0.01071em",
    color: "#1976d2",
    "-webkit-text-decoration": "underline",
    textDecoration: "underline",
    textDecorationColor: "rgba(25, 118, 210, 0.4)",
  };

  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <BasePage pageName="Entrar" withoutLeftMenu={true}>
      <Box
        alignItems="center"
        justifyContent="center"
        margin={"auto"}
        sx={{
          display: "flex",
          "flex-direction": "column",
          gap: "1em",
          "align-items": "center",
          width: "75%",
          filter: "brightness(1)",
        }}
      >
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
              Sentimos sua falta!
            </Typography>
            <Typography
              component="p"
              paragraph={true}
              color={"#f0f0f0"}
              textAlign="center"
            >
              Vamos em busca do conhecimento coletivo.
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth={true}
                    sx={{ background: "white", borderRadius: "5px" }}
                  >
                    <OutlinedInput
                      autoFocus
                      required
                      id="username"
                      type={"text"}
                      value={values.username}
                      onChange={handleChange("username")}
                      placeholder="Usuário"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth={true}
                    sx={{ background: "white", borderRadius: "5px" }}
                  >
                    <OutlinedInput
                      required
                      id="password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      placeholder="Senha"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  color: "#F0F0F0",
                  "&:hover": {
                    background: "#217CCB",
                    filter: "brightness(85%)",
                  },
                }}
              >
                Entrar
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/register" style={linkStyle}>
                    Não tem uma conta? Registre-se
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </BasePage>
  );
}
