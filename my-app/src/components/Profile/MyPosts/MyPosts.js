import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} like={p.likesCount} />
  ));

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
