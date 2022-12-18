import { React, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function FormRegister() {
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
    name: "",
    lastName: "",
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
  );
}
