import React from "react";
import st from "./Form.module.css";

type FormProps = {
  submitHandler: React.FormEventHandler<HTMLFormElement>;
  children?: React.ReactNode;
};

const Form: React.FC<FormProps> = ({ submitHandler, children }) => {
  return (
    <form className={st.form} onSubmit={submitHandler}>
      {children}
    </form>
  );
};

export default Form;
