import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({ handleSubmit, error, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>

      {error && <div className={style.formGeneralError}>{error}</div>}

      <div>Full name: {createField("Full name", "fullName", Input, [])} </div>

      <div>
        Looking for a job:{" "}
        {createField("", "lookingForAJob", Input, [], { type: "checkbox" })}
      </div>

      <div>
        My professional skills:{" "}
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          Textarea,
          []
        )}
      </div>

      <div>About me: {createField("About me", "aboutMe", Textarea, [])}</div>

      <div>
        Contacts:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              {key}: {createField(key, "contacts." + key, Input, [])}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: "editProfileData",
})(ProfileDataForm);

export default ProfileDataReduxForm;
