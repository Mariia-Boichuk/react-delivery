import React from "react";
import styles from "./LogOutButton.module.css";
import Button from "../../Button/Button";
import Cookies from "js-cookie";
import { SIGN_IN } from "../../../utils/routes";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../../reduxFeatures/actions/authActions";
import { Dispatch } from "react";

type IProps = {
  dispatch: Dispatch<any>;
};

const LogOutButton: React.FC<IProps> = ({ dispatch }) => {
  const redirect = useNavigate();

  return (
    <div className={styles.navItemHeader}>
      <Button
        text="log out"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();

          dispatch(setUserData(null));
          Cookies.remove("jwt");

          redirect(SIGN_IN);
        }}
      />
    </div>
  );
};

export default LogOutButton;
