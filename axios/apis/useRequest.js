// export const login = async (data) => {
//   return await mainInstance.post("/login", data);
// };

// export const logoutApi = async () => {
//   return await mainInstance.post("/logout");
// };

// export const adminStatus = async () => {
//   return await mainInstance.get("/check-status");
// };

// export const changeStatus = (data) => {
//   return mainInstance.post("/change-status", data);
// };

// export const quizApi = async () => {
//   return await mainInstance.get("/activity/3/questions");
// };

// export const answersApi = async (answers) => {
//   return await mainInstance.post("/activity/quiz/score", answers);
// };

// export const getActivity = async () => {
//   return await mainInstance.get("/activities");
// };

// export const getMemberData = async (activity_id) => {
//   return await mainInstance.get(`/activity/${activity_id}/teamMembers`);
// };

// export const postScore = async (score) => {
//   return await mainInstance.post("/activity/score", score);
// };

// export const getGameScore = async () => {
//   return await mainInstance.get("/activity/game/score");
// };

// export const getQuizScore = async () => {
//   return await mainInstance.get("/activity/quiz/score");
// };

import useApi from "../useApi";

const useRequest = () => {
  const Request = useApi();

  const logOut = async () => {
    return await Request.get(`logout`);
  };

  const signIn = async (data) => {
    return await Request.post("auth", data);
  };

  const signUp = async (data) => {
    return await Request.post("register", data);
  };

  const userData = async () => {
    return await Request.get("users/token");
  };

  const profileData = async (data) => {
    return await Request.patch(`users/${data.userId}`, data.info);
  };

  /// END USER REQUESTS

  const userList = async () => {
    return await Request.get("list/userlist");
  };
  const addList = async (data) => {
    return await Request.post("list", data);
  };
  const removeList = async (data) => {
    return await Request.delete(`list/${data}`);
  };
  const addVideo = async (data) => {
    return await Request.post("video", data);
  };

  const getVideo = async (data) => {
    return await Request.get(`video/${data}`);
  };
  const deleteVideo = async (data) => {
    return await Request.delete(`video/${data}`);
  };
  const editVideo = async (data) => {
    return await Request.patch(`video/${data.url}`, data.data);
  };
  const mainSearch = async (data) => {
    return await Request.get(`search/${data}`);
  };
  const getComments = async (data) => {
    return await Request.get(`comment/${data}`);
  };
  const editComment = async (data) => {
    return await Request.patch(`comment/${data.url}`, data.data);
  };
  const addComment = async (data) => {
    return await Request.post("comment", data);
  };
  const updateUser = async (data) => {
    return await Request.patch(`users/${data.url}`, data.data);
  };
  const getReport = async (data) => {
    return await Request.get(`report/${data}`);
  };
  const addReport = async (data) => {
    return await Request.post("report", data);
  };
  const editReport = async (data) => {
    return await Request.patch(`report/${data.url}`, data.data);
  };

  return {
    addVideo,
    signIn,
    signUp,
    mainSearch,
    deleteVideo,
    userData,
    logOut,
    profileData,
    userList,
    addList,
    removeList,
    getVideo,
    editVideo,
    getComments,
    addComment,
    editComment,
    updateUser,
    getReport,
    addReport,
    editReport,
  };
};
export default useRequest;
