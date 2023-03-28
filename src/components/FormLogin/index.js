import { React, useContext } from "react";
import { Box, Grid } from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { UserService } from "../../services/user";
import { GoogleLogin } from "@react-oauth/google";

export default function LoginPage({ _, setLoading }) {
  const { enqueueSnackbar } = useSnackbar();
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const handleLoginGoogle = (credential) => {
    setLoading(true);
    UserService.login(credential)
      .then((response) => {
        const content = response.data;
        loginUser(content);
        goToHomePage();
        enqueueSnackbar("Login realizado com sucesso.", { variant: "success" });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        let message = "Não foi possível fazer o login.";
        if (err?.response?.data?.message[0] !== undefined) {
          message = err?.response?.data?.message[0];
        }
        enqueueSnackbar(message, { variant: "error" });
        console.log(err);
      });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <GoogleLogin
            onSuccess={(credentialResponse) =>
              handleLoginGoogle(credentialResponse.credential)
            }
            onError={() => {
              console.log("Login Failed");
            }}
            buttonText="Fazer login com o Google"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
