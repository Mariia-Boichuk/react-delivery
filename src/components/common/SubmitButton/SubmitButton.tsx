import React from "react";
import st from "./SubmitButton.module.css";

const SubmitButton = () => {
  return (
    <button type="submit" className={st.submit}>
      Submit
    </button>
  );
};

export default SubmitButton;
