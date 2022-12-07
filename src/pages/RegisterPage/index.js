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
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Header from "../../components/Header";
import { drawerWidth } from "../../constants.js";

export default function RegisterPage() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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
    <Container component="main" maxWidth="xs">
      <Header
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        drawerWidth={drawerWidth}
      />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Entre na comunidade Helpfy
        </Typography>
        <Typography component="p" paragraph={true}>
          Obtenha mais recursos e privilégios ingressando na comunidade de
          estudantes!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth={true}>
                <InputLabel required htmlFor="username">
                  Usuário
                </InputLabel>
                <OutlinedInput
                  autoFocus
                  required
                  id="username"
                  type={"text"}
                  value={values.username}
                  onChange={handleChange("username")}
                  label="Usuário"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth={true}>
                <InputLabel required htmlFor="email">
                  Email
                </InputLabel>
                <OutlinedInput
                  required
                  id="email"
                  type={"email"}
                  value={values.email}
                  onChange={handleChange("email")}
                  label="Email"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth={true}>
                <InputLabel required htmlFor="password">
                  Senha
                </InputLabel>
                <OutlinedInput
                  required
                  id="password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
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
                  label="Senha"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth={true}>
                <InputLabel required htmlFor="confirmPassword">
                  Repita a Senha
                </InputLabel>
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
                  label="Repita a Senha"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
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
  );
}
