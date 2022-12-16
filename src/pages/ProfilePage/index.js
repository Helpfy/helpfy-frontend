import { React, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  OutlinedInput,
} from "@mui/material";
import BasePage from "../BasePage";
import imageDefault from "../../assets/perfil_not_found.png";
import imageNotFound from "../../assets/link_not_valid.jpg";

export default function ProfilePage() {
  const [values, setValues] = useState({
    username: "",
    course: "",
    avatarLink: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const validLink = () => {
    return (
      !values.avatarLink ||
      /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i.test(
        values.avatarLink
      )
    );
  };

  return (
    <BasePage pageName="Perfil" logout={true}>
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
                <Grid item xs={12}>
                  <FormControl
                    fullWidth={true}
                    sx={{ background: "white", borderRadius: "5px" }}
                  >
                    <OutlinedInput
                      id="avatarLink"
                      type={"text"}
                      value={values.avatarLink}
                      onChange={handleChange("avatarLink")}
                      placeholder="Link da imagem de perfil"
                      error={!validLink()}
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
                      id="course"
                      type={"text"}
                      value={values.course}
                      onChange={handleChange("course")}
                      placeholder="Curso"
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
      </Box>
    </BasePage>
  );
}
