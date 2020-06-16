import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import AddMessageReduxForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  const messagesElements = props.messages.map((m) => (
    <MessageItem message={m.message} key={m.id} />
  ));

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messagesItems}>
        <div>{messagesElements}</div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
