import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/img/user.png";
import style from "./Users.module.css";

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div>
      <div>
        <NavLink to={/profile/ + user.id}>
          <img
            src={user.photos.small ? user.photos.small : userPhoto}
            alt="avatar"
            className={style.avatar}
          />
        </NavLink>
      </div>
      <div>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>

      <div>{user.name}</div>
      <div>{user.status}</div>

      <div>{"user.location.country"}</div>
      <div>{"user.location.city"}</div>
    </div>
  );
};

export default User;
