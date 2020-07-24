import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = '"ADD-POST"';
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCESS = "SAVE_PHOTO_SUCESS";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It's my first post!", likesCount: 20 },
  ],
  profile: null,
  status: "",
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 5, message: action.newPostText, likesCount: 0 },
        ],
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };

    case SAVE_PHOTO_SUCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const setStatus = (status) => ({ type: SET_STATUS, status });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCESS, photos });

const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

//thunkCreator

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };
};

export const getUserStatus = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };
};

export const updateUserStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export const savePhoto = (file) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
      dispatch(toggleIsFetching(false));
    }
  };
};

export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      dispatch(
        stopSubmit("editProfileData", { _error: response.data.messages[0] })
      );
      return Promise.reject(response.data.messages[0]);
    }
  };
};

export default profileReducer;
