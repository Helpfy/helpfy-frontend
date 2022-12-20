import api from "./api";
export const AnswerService = {
  async sendAnswer(text, questionId, userId, token) {
    const response = await api.post(
      `/answers/users/${userId}/questions/${questionId}`,
      {
        body: text,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  },
};
