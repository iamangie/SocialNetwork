import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = props.state.messages.map((m) => (
    <MessageItem message={m.message} />
  ));

  const onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (event) => {
    let text = event.target.value;
    props.dispatch(updateNewMessageTextCreator(text));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messagesItems}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            placeholder="Enter your message"
            value={props.state.newMessageText}
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
