import api from "./api";

export const CommentService = {
  async commentAnswer(text, answerId, userId, token) {
    const response = await api.post(
      `/comments/answers/${answerId}/users/${userId}`,
      {
        content: text,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  },
  async commentQuestion(text, questionId, userId, token) {
    const response = await api.post(
      `/comments/questions/${questionId}/users/${userId}`,
      {
        content: text,
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
