import { profileAPI } from "../api/api";

const ADD_POST = '"ADD-POST"';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It's my first post!", likesCount: 20 },
  ],
  newPostText: "Hi, flamingos! It's a new post.",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 5, message: state.newPostText, likesCount: 0 },
        ],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const setStatus = (status) => ({ type: SET_STATUS, status });

//thunkCreator

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
