import React from "react";
import avatar from "../../../img/ava_dialogs.jpg";
import style from "./Friends.module.css";

const Friends = (props) => {
  return (
    <div>
      <img className={style.avatar} src={avatar} alt="avatar" />
      <p>{props.name}</p>
    </div>
  );
};

export default Friends;
