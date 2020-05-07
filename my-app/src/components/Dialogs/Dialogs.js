import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = props.state.messages.map((m) => (
    <MessageItem message={m.message} />
  ));

  let newMessageElement = React.createRef();

  const newMessage = () => {
    let message = newMessageElement.current.value;
    alert(message);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messagesItems}>{messagesElements}</div>
      <div>
        <textarea ref={newMessageElement}></textarea>
      </div>
      <div>
        <button onClick={newMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
