import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";

class MyPosts extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    debugger;
    if (this.props.addPost !== nextProps.addPost) {
      return true;
    }
    if (this.props.posts !== nextProps.posts) {
      return true;
    }
    return false;
  }
  render() {
    console.log("RENDER");
    console.log(this.props);

    const postsElements = this.props.posts.map((p) => (
      <Post message={p.message} like={p.likesCount} id={p.id} />
    ));

    const onAddPost = (values) => {
      this.props.addPost(values.newPostText);
    };

    return (
      <div className={style.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostForm onSubmit={onAddPost} />
        <div className={style.posts}>{postsElements}</div>
      </div>
    );
  }
}

export default MyPosts;
