let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It's my first post!", likesCount: 20 },
      ],
      newPostText: "Hi, flamingos! It's a new post.",
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
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("State is changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
};

export default store;
