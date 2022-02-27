import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import st from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { clearErrorMes } from "../../reduxFeatures/actions/index";

const Modal = ({ mes }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearErrorMes());
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
