import React from "react";
import userPhoto from "../../assets/img/user.png";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";
import { followAPI } from "../../api/api";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span className={style.page}>
              <span
                className={props.currentPage === p && style.selectedPage}
                onClick={(e) => {
                  props.onPageChange(p);
                }}
              >
                {p}
              </span>
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key="u.id">
          <div>
            <NavLink to={/profile/ + u.id}>
              <img
                src={u.photos.small ? u.photos.small : userPhoto}
                alt="avatar"
                className={style.avatar}
              />
            </NavLink>
          </div>
          <div>
            {u.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.toggleFollowingProgress(true, u.id);
                  followAPI.unfollowUser(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.unfollow(u.id);
                    }
                    props.toggleFollowingProgress(false, u.id);
                  });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.toggleFollowingProgress(true, u.id);
                  followAPI.followUser(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.follow(u.id);
                    }
                    props.toggleFollowingProgress(false, u.id);
                  });
                }}
              >
                Follow
              </button>
            )}
          </div>

          <div>{u.name}</div>
          <div>{u.status}</div>

          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
