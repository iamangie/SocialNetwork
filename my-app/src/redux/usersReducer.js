import { usersAPI, followAPI } from "../api/api";

const FOLLOW = '"FOLLOW"';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

const followSuccess = (userId) => ({ type: FOLLOW, userId });
const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
const setUsers = (users) => ({ type: SET_USERS, users });
const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
const setUsersTotalCount = (count) => ({
  type: SET_TOTAL_USERS_COUNT,
  count,
});
const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

//thunkCreator

export const requestUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount / 100));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    followAPI.followUser(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    followAPI.unfollowUser(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
