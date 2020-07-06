import React from "react";
import { Field } from "redux-form";
import style from "./FormsControls.module.css";

const FormControl = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={style.formControl + " " + (hasError && style.error)}>
      <div>{props.children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...props.input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...props.input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  component,
  validators,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validators}
        {...props}
      />{" "}
      {text}
    </div>
  );
};
