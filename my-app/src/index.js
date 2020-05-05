import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 15 },
  { id: 2, message: "It's my first post!", likesCount: 20 },
];

const dialogs = [
  { id: 1, name: "Dymich" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Victor" },
];

const messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hello" },
  { id: 3, message: "Bye" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo yo yo" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
