import React, { ChangeEventHandler } from "react";
import st from "./Input.module.css";

type InputProps = {
  value: string;
  name: string;
  type: string;
  placeholder: string;
  error: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<InputProps> = ({
  value,
  name,
  type,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div className={st.formControl}>
      <input
        type={type}
        value={value}
        name={name}
        className={st.input}
        placeholder={placeholder}
        onChange={onChange}
      />

      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
