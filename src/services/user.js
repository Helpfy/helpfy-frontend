import api from "./api";
export const UserService = {
  registerUser(body) {
    return api.post(`/users`, body);
  },

  login(body) {
    return api.get(`/auth`);
  },

  async loginSucess() {
    const resp = await api.get(`/login-success`);
    console.log(resp);
    return resp;
  },

  async loginFail() {
    debugger;
    const resp = await api.get(`/login-fail`);
    console.log(resp);
    return resp;
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
