import { FormikErrors } from "formik";
import React, { ChangeEventHandler } from "react";
import st from "./Input.module.css";

type InputProps = {
  value: string;
  refpr?: React.RefObject<HTMLInputElement>;
  name: string;
  type: string;
  placeholder: string;
  error: FormikErrors<string>;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<InputProps> = ({
  value,
  name,
  type,
  onChange,
  placeholder,
  error,
  refpr,
}) => {
  return (
    <div className={st.formControl}>
      <input
        type={type}
        value={value}
        name={name}
        ref={refpr}
        className={st.input}
        placeholder={placeholder}
        onChange={onChange}
      />

      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
