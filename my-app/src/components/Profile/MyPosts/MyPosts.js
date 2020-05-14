import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} like={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
