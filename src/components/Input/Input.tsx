import React, { ChangeEventHandler } from "react";
import st from "./Input.module.css";

type InputProps = {
  value: string;
  name: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<InputProps> = ({ value, name, type, onChange }) => {
  return (
    <div className={st.formControl}>
      <input
        type={type}
        value={value}
        name={name}
        className={st.input}
        placeholder={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
