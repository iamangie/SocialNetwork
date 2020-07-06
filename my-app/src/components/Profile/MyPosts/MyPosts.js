import React from "react";
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = React.memo((props) => {
  console.log("RENDER");
  console.log(props);

  const postsElements = props.posts.map((p) => (
    <Post message={p.message} like={p.likesCount} id={p.id} />
  ));

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
