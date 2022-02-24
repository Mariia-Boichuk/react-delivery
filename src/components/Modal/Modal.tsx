import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import st from "./Modal.module.css";
import { useContext } from "react";
import ErrorContext from "../../context/ErrorContextProvider";

const Modal = ({ mes }) => {
  const { setError } = useContext(ErrorContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 3000);
    return () => clearTimeout(timer);
  });
  return createPortal(
    <div className={st.container}>
      <div className={st.modal}>
        <h3 className={st.titleModal}> {mes}</h3>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
