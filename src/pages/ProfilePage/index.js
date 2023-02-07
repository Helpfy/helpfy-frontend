import { React, useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  OutlinedInput,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSnackbar } from "notistack";
import BasePage from "../BasePage";
import imageDefault from "../../assets/perfil_not_found.png";
import imageNotFound from "../../assets/link_not_valid.jpg";
import { AuthContext } from "../../context/AuthContext";
import { UserService } from "../../services/user";
import DadosEstaticosService from "../../utils/dadosEstaticosService";

export default function ProfilePage() {
  const { user, token, loginUser } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();

  const [values, setValues] = useState({
    lastName: "",
    name: "",
    avatarLink: "",
    email: "",
    id: undefined,
  });

  useEffect(() => {
    setValues(user);
  }, [user]);

  const [loading, setLoading] = useState(false);
  const [loadingImg, setLoadingImg] = useState(false);

  const hadChanges = () => {
    return (
      values.lastName !== user.lastName ||
      values.name !== user.name ||
      values.avatarLink !== user.avatarLink ||
      values.email !== user.email
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!hadChanges()) {
      enqueueSnackbar("Não houve mudanças.", { variant: "error" });
      return;
    }
    setLoading(true);
    UserService.update(values, token)
      .then((response) => {
        const content = { user: response.data, token };
        loginUser(content);
        setLoading(false);
        enqueueSnackbar("Usuário editado com sucesso.", { variant: "success" });
      })
      .catch((err) => {
        setLoading(false);
        let message = err.response.data.message;
        if (!message) {
          message = "Não foi possível editar.";
        }
        enqueueSnackbar(message, { variant: "error" });
        console.log(err);
      });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleUploadClick = (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    if (e.target.files[0].size > 1048576) {
      enqueueSnackbar(
        "Desculpe, mas o arquivo que você está tentando enviar excede o tamanho máximo permitido de 1 MB. Por favor, selecione um arquivo menor e tente novamente. Obrigado!",
        { variant: "error", autoHideDuration: 8000 }
      );
      return;
    }
    setLoadingImg(true);
    UserService.uploadImage(formData, token)
      .then((response) => {
        const url = `${DadosEstaticosService.getURLServidor()}${
          response.data.url
        }`;
        let userWithUrl = { ...values, avatarLink: url };
        setValues(userWithUrl);
        enqueueSnackbar("Salve as alterações para salvar a imagem enviada.", {
          variant: "success",
        });
        setLoadingImg(false);
      })
      .catch((err) => {
        setLoadingImg(false);
        let message = err.response.data.message;
        if (!message) {
          message = "Não foi possível fazer o upload.";
        }
        enqueueSnackbar(message, { variant: "error" });
        console.log(err);
      });
  };

  let content = loading ? (
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
        <Avatar
          sx={{
            bgcolor: "#f0f0f0",
            width: "10rem",
            height: "10rem",
          }}
          src={values.avatarLink || imageDefault}
          alt={`Profile image of ...`}
        >
          <Avatar
            sx={{
              bgcolor: "#f0f0f0",
              width: "10rem",
              height: "10rem",
            }}
            src={imageNotFound}
          />
        </Avatar>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <LoadingButton
                variant="contained"
                component="label"
                loading={loadingImg}
              >
                Upload
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={handleUploadClick}
                />
              </LoadingButton>
            </Grid>
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
            Salvar alterações
          </Button>
        </Box>
      </Box>
    </Container>
  );

  return (
    <BasePage pageName="Perfil" logout={true}>
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
        {content}
      </Box>
    </BasePage>
  );
}
