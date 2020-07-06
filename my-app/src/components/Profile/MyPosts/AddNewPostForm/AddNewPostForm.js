import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder="Post text"
          validate={[required, maxLength30]}
        />
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
