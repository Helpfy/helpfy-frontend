import api from "./api";
export const QuestionService = {
  createQuestion(user, body, token) {
    return api.post(`/questions/users/${user.id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  updateQuestion(user, body, token) {
    return api.patch(`/questions/users/${user.id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  async likeQuestion(userId, questionId, token) {
    const response = await api.patch(
      `/questions/${questionId}/users/${userId}/like`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  },

  async dislikeQuestion(userId, questionId, token) {
    const response = await api.patch(
      `/questions/${questionId}/users/${userId}/dislike`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  },

  updateAnsweredStatus(question, token) {
    return api.patch(
      `/questions/${question.id}/answered`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  async searchQuestionById(id) {
    const response = await api.get(`/questions/${id}`);

    return response.data;
  },

  async delete(questionId, token) {
    const response = await api.delete(
      `/questions/${questionId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  async update(questionId, body, token) {
    const response = await api.patch(`/questions/${questionId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};
