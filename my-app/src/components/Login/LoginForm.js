import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import style from "../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Email"
          name="email"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          type="password"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component={Input} />
        remember me
      </div>
      {props.error && (
        <div className={style.formGeneralError}>{props.error}</div>
      )}
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
