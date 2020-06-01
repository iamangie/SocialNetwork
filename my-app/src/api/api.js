import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "77c107e6-d335-4940-937e-cbbcf5ca343a",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

export const authAPI = {
  authUser() {
    return instance.get(`/auth/me`).then((response) => response.data);
  },
};

export const followAPI = {
  unfollowUser(userId) {
    return instance
      .delete(`/follow/${userId}`)
      .then((response) => response.data);
  },
  followUser(userId) {
    return instance.post(`/follow/${userId}`).then((response) => response.data);
  },
};
