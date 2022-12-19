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

  likeQuestion(user, question, token) {
    return api.patch(
      `/questions/${question.id}/users/${user.id}/like`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  dislikeQuestion(user, question, token) {
    return api.patch(
      `/questions/${question.id}/users/${user.id}/dislike`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
};
