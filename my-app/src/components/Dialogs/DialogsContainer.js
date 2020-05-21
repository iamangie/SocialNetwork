import React from "react";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextCreator(text));
  };

  return (
    <Dialogs
      sendMessage={onSendMessageClick}
      updateNewMessageText={onNewMessageChange}
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      newMessageText={state.newMessageText}
    />
  );
};

export default DialogsContainer;
