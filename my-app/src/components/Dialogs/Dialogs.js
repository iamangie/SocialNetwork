import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = props.messages.map((m) => (
    <MessageItem message={m.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messagesItems}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
