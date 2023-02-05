import api from "./api";

export const SearchService = {
  async searchByTitle(title) {
    const response = await api.get(`/search?title=${title}`);

    return response.data;
  },
  async searchByFilter(filter, page = 0, size = 10) {
    const response = await api.get(
      `/search?filter=${filter}&page=${page}&size=${size}`
    );

    return response.data;
  },
};
