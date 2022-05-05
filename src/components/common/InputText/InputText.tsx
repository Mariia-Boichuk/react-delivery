import { FormikErrors } from "formik";
import React, { ChangeEventHandler } from "react";
import styles from "./InputText.module.css";

type InputProps = {
  value: string;
  name: string;
  type: string;
  placeholder: string;
  error: FormikErrors<string>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  autofocus?: boolean;
};

const InputText: React.FC<InputProps> = ({
  value,
  name,
  type,
  onChange,
  placeholder,
  error,
  autofocus,
}) => {
  return (
    <div className={styles.formControl}>
      <input
        type={type}
        value={value}
        name={name}
        autoFocus={autofocus}
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
      />

      {error && <p>{error}</p>}
    </div>
  );
};

export default InputText;
