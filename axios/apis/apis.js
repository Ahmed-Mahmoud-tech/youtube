export const login = async (data) => {
  return await mainInstance.post("/login", data);
};

export const logoutApi = async () => {
  return await mainInstance.post("/logout");
};

export const adminStatus = async () => {
  return await mainInstance.get("/check-status");
};

export const changeStatus = (data) => {
  return mainInstance.post("/change-status", data);
};

export const quizApi = async () => {
  return await mainInstance.get("/activity/3/questions");
};

export const answersApi = async (answers) => {
  return await mainInstance.post("/activity/quiz/score", answers);
};

export const getActivity = async () => {
  return await mainInstance.get("/activities");
};

export const getMemberData = async (activity_id) => {
  return await mainInstance.get(`/activity/${activity_id}/teamMembers`);
};

export const postScore = async (score) => {
  return await mainInstance.post("/activity/score", score);
};

export const getGameScore = async () => {
  return await mainInstance.get("/activity/game/score");
};

export const getQuizScore = async () => {
  return await mainInstance.get("/activity/quiz/score");
};
