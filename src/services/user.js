import api from "./api";
export const UserService = {
  registerUser(body) {
    return api.post(`/users`, body);
  },

  async login(credential) {
    const resp = await api.get(`/login/oauth2?token=${credential}`);
    console.log(resp)
    return resp
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
