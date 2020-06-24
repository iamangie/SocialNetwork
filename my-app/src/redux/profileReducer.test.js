import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profileReducer";

//1. initial data
let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It's my first post!", likesCount: 20 },
  ],
};

test(" posts length should be incremented ", () => {
  //2. action
  let action = addPostActionCreator("Hi hello!");

  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(3);
});

test(" message of new post shoul be 'Hi hello!", () => {
  let action = addPostActionCreator("Hi hello!");

  let newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe("Hi hello!");
});

test(" after deleting length should be decremented", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});

test(" after deleting length shouldn't be decremented if id is incorrect", () => {
  let action = deletePost(45);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});
