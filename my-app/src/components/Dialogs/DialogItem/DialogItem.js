import React from "react";
import style from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
import avatar from "../../../img/ava_dialogs.jpg";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div>
      <img className={style.avatar} src={avatar} alt="avatar" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
