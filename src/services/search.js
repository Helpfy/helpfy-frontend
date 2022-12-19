import api from "./api";

export const SearchService = {
	async searchByTitle(title) {
		const response = await api.get(`/search?title=${title}`);

		return response.data;
	},
	async searchByFilter(filter) {
		const response = await api.get(`/searcwdfqdqwdqwh?filter=${filter}`);

		return response.data;
	},
};
