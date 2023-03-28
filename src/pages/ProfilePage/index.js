import { React, useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Container,
  FormControl,
  Grid,
  OutlinedInput,
} from "@mui/material";
import BasePage from "../BasePage";
import imageDefault from "../../assets/perfil_not_found.png";
import imageNotFound from "../../assets/link_not_valid.jpg";
import { AuthContext } from "../../context/AuthContext";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);

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

  let content = (
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
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl
                fullWidth={true}
                sx={{ background: "white", borderRadius: "5px" }}
                disabled
              >
                <OutlinedInput
                  autoFocus
                  required
                  id="name"
                  type={"text"}
                  value={values.name}
                  placeholder="Nome"
                  disabled
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                fullWidth={true}
                sx={{ background: "white", borderRadius: "5px" }}
                disabled
              >
                <OutlinedInput
                  required
                  id="lastName"
                  type={"text"}
                  value={values.lastName}
                  placeholder="Sobrenome"
                  disabled
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                fullWidth={true}
                sx={{ background: "white", borderRadius: "5px" }}
                disabled
              >
                <OutlinedInput
                  required
                  id="email"
                  type={"email"}
                  value={values.email}
                  placeholder="Email"
                  disabled
                />
              </FormControl>
            </Grid>
          </Grid>
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
