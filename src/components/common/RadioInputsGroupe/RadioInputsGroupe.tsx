import React, { ChangeEventHandler, FC, Fragment } from "react";
import styles from "./RadioInputsGroupe.module.css";

export type choiceType = {
  label: string;
  value: string;
};

interface RadioInputsGroupeProps {
  choices: Array<choiceType>;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | number;
}

const RadioInputsGroupe: FC<RadioInputsGroupeProps> = ({
  name,
  onChange,
  value,
  choices,
}) => {
  return (
    <div className={styles.radio}>
      <label className={styles.groupLabel}>{name}: </label>
      {choices.map((item) => (
        <Fragment key={item.value}>
          <input
            className={styles.groupLabel}
            type="radio"
            name={name}
            value={item.value}
            checked={value === item.value}
            onChange={onChange}
          />
          <label className={styles.label}>{item.label}</label>
        </Fragment>
      ))}
    </div>
  );
};

export default RadioInputsGroupe;
