import api from "./api";
export const UserService = {
  login(body) {
    return api.post(`/login`, body);
  },
};
