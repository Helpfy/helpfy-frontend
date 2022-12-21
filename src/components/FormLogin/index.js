import { React, useContext, useState } from "react";
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
import { useSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { UserService } from "../../services/user";

export default function LoginPage({ loading, setLoading }) {
  const { enqueueSnackbar } = useSnackbar();
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

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
    email: "",
    password: "",
    showPassword: false,
  });

  const goToHomePage = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginPayload = {
      email: values.email,
      password: values.password,
    };
    setLoading(true);
    UserService.login(loginPayload)
      .then((response) => {
        const content = response.data;
        loginUser(content);
        goToHomePage();
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        let message = "Usuário não existe, verifique o e-mail e a senha.";
        if (err?.response?.status !== 404) {
          message = "Não foi possível fazer o login.";
        }
        enqueueSnackbar(message, { variant: "error" });
        console.log(err);
      });
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
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
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
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
  );
}
