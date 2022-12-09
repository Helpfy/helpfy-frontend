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
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import BasePage from "../BasePage";

export default function RegisterPage() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (_, isConfirmPassword) => {
    const changeShow = isConfirmPassword
      ? { showConfirmPassword: !values.showConfirmPassword }
      : { showPassword: !values.showPassword };
    setValues({
      ...values,
      ...changeShow,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <BasePage pageName="Registrar" withoutLeftMenu={true}>
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
                      id="email"
                      type={"email"}
                      value={values.email}
                      onChange={handleChange("email")}
                      placeholder="Email"
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
                <Grid item xs={12}>
                  <FormControl
                    fullWidth={true}
                    sx={{ background: "white", borderRadius: "5px" }}
                  >
                    <OutlinedInput
                      required
                      id="confirmPassword"
                      type={values.showConfirmPassword ? "text" : "password"}
                      value={values.confirmPassword}
                      onChange={handleChange("confirmPassword")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirm Password visibility"
                            onClick={(e) => handleClickShowPassword(e, true)}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      placeholder="Repita a Senha"
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
                Registrar
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="login" variant="body2">
                    Já é registrado? Acesse aqui!
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
