import React from "react";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import style from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", Input, [required])}
      {/* <Field
          placeholder="Email"
          name="email"
          component={Input}
          validate={[required]}
        /> */}

      {createField("Password", "password", Input, [required], {
        type: "password",
      })}
      {/* <Field
          placeholder="Password"
          name="password"
          type="password"
          component={Input}
          validate={[required]}
        /> */}

      {createField(
        null,
        "rememberMe",
        Input,
        null,
        { type: "checkbox" },
        "remember me"
      )}
      {/* <Field type="checkbox" name="rememberMe" component={Input} />
        remember me */}

      {error && <div className={style.formGeneralError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm;
