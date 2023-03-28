import api from "./api";
import axios from "axios";
export const UserService = {
  registerUser(body) {
    return api.post(`/users`, body);
  },

  // login(body) {
  //   return api.post(`/login`, body);
  // },

  async login(credential) {
    const resp = await api.get(`/login/oauth2?token=${encodeURI(credential)}`);
    console.log(resp);
    return resp;
  },

  teste(access_token) {
    debugger
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  },

  update(user, token) {
    return api.put(`/users/${encodeURI(user.id)}`, user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  uploadImage(file, token) {
    return api.post(`/upload-image`, file, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
