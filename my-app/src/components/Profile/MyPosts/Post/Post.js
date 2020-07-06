import React from "react";
import avatar from "../../../../assets/img/avatar.jpg";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img className={style.avatar} src={avatar} alt="avatar" />
      {props.message}
      <div>
        <span>Like {props.like} </span>
      </div>
    </div>
  );
};

export default Post;
