import React from "react";
import style from "./MessageItem.module.css";

const MessageItem = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

export default MessageItem;
