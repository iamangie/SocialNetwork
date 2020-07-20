import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "b78271be-a43f-41dc-ad26-e05080b0bcb2",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

export const followAPI = {
  unfollowUser(userId) {
    return instance.delete(`/follow/${userId}`);
  },
  followUser(userId) {
    return instance.post(`/follow/${userId}`);
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`/auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`/auth/login`, {
      email,
      password,
      rememberMe,
    });
  },
  logout() {
    return instance.delete(`/auth/login`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`/profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`/profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`/profile/status`, {
      status: status,
    });
  },
  savePhoto(file) {
    let formData = new FormData();
    formData.append("image", file);
    return instance.put(`/profile/photo`, formData);
  },
};
