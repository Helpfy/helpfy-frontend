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

  async likeAnswer(userId, answersId, token) {
    const response = await api.patch(
      `/answers/${answersId}/users/${userId}/like`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  },

  async dislikeAnswer(userId, answersId, token) {
    const response = await api.patch(
      `/answers/${answersId}/users/${userId}/dislike`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  },

  async delete(answersId, token) {
    const response = await api.delete(`/answers/${answersId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },

  async update(answersId, body, token) {
    const response = await api.patch(`/answers/${answersId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },

  async accept(answersId, token) {
    const response = await api.patch(`/answers/${answersId}/solution`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },

};
