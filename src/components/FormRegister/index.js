import { React, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  CircularProgress,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { UserService } from "../../services/user";

export default function FormRegister() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const goToLoginPage = () => {
    navigate("/login");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      avatarLink: "",
      email: values.email,
      lastName: values.lastName,
      name: values.name,
      password: values.password,
    };
    setLoading(true);
    UserService.registerUser(body)
      .then((response) => {
        enqueueSnackbar("Usuário criado com sucesso.", { variant: "success" });
        goToLoginPage();
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        let message = "Email já cadastrado.";
        if (err.response.status !== 400) {
          message = "Não foi possível fazer o cadastro.";
        }
        enqueueSnackbar(message, { variant: "error" });
        console.log(err);
      });
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

  const linkStyle = {
    margin: 0,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.43",
    letterSpacing: "0.01071em",
    color: "#1976d2",
    WebkitTextDecoration: "underline",
    textDecoration: "underline",
    textDecorationColor: "rgba(25, 118, 210, 0.4)",
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
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
                  id="name"
                  type={"text"}
                  value={values.name}
                  onChange={handleChange("name")}
                  placeholder="Nome"
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
                  id="lastName"
                  type={"text"}
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                  placeholder="Sobrenome"
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
              <Link to="/login" style={linkStyle}>
                Já é registrado? Acesse aqui!
              </Link>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}
