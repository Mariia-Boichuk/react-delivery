import React from "react";
import st from "./LogOutButton.module.css";
import MyButton from "../../MyButton/MyButton";
import Cookies from "js-cookie";
import { SIGN_IN } from "../../../utils/routes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../reduxFeatures/actions/authActions";

const LogOutButton: React.FC = () => {
  const navg = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={st.navItemHeader}>
      <MyButton
        text="log out"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();

          dispatch(setUserData(null));
          Cookies.remove("jwt");

          navg(SIGN_IN);
        }}
      />
    </div>
  );
};

export default LogOutButton;
