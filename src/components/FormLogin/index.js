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
import { GoogleLogin } from "@react-oauth/google";

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

  const responseMessage = async (response) => {
    console.log(response);
    debugger
    // const response2 = await UserService.login(response.credential)
    UserService.teste(response.credential)
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} alignContent="center">
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} useOneTap/>
        </Grid>
      </Grid>
    </Box>
  );
}
