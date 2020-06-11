import React from "react";
import { Field, reduxForm } from "redux-form";

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

AddNewPostForm = reduxForm({
  form: "profileAddNewPostForm",
})(AddNewPostForm);

export default AddNewPostForm;
