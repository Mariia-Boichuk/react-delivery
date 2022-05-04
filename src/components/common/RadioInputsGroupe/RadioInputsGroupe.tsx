import React, { ChangeEventHandler, FC } from "react";

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
    <div>
      <label>{name}</label>
      {choices.map((item) => (
        <label key={item.value}>
          <input
            type="radio"
            name={name}
            value={item.value}
            checked={value === item.value}
            onChange={onChange}
          />
          {item.label}
        </label>
      ))}
    </div>
  );
};

export default RadioInputsGroupe;
