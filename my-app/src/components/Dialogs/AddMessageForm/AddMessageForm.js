import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength300 = maxLengthCreator(300);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageText"
          placeholder="Enter your message"
          validate={[required, maxLength300]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

export default AddMessageReduxForm;
