import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  const messagesElements = props.messages.map((m) => (
    <MessageItem message={m.message} key={m.id} />
  ));

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (event) => {
    let text = event.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messagesItems}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            placeholder="Enter your message"
            value={props.newMessageText}
            onChange={onNewMessageChange}
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
