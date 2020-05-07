const state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 15 },
      { id: 2, message: "It's my first post!", likesCount: 20 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dymich" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Victor" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hello" },
      { id: 3, message: "Bye" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo yo yo" },
    ],
  },
  sidebar: {
    friends: [
      { id: 1, name: "Andrew" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Anna" },
    ],
  },
};

export const addPost = (postMessage) => {
  debugger;
  const newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
};

export default state;
