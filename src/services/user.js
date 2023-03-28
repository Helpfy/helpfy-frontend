import api from "./api";
export const UserService = {
  registerUser(body) {
    return api.post(`/users`, body);
  },

  login(credential) {
    return api.get(`/login/oauth2?token=${credential}`);
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
