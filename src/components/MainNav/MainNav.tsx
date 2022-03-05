import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import st from "./MainNav.module.css";
import { MY_PROFILE, SIGN_IN, REGISTER } from "../../utils/routes";
import Cookies from "js-cookie";
import { setUserData } from "../../reduxFeatures/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../reduxFeatures/reducers/reducer";
import WidthWrapper from "../WidthWrapper/WidthWrapper";
import MyLink from "../MyLink/MyLink";

const MainNav: React.FC = () => {
  const navg = useNavigate();
  const user = useSelector((state: State) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <WidthWrapper>
      <nav>
        <ul className={st.navListHeader}>
          {!user && (
            <>
              <MyLink to={SIGN_IN} text="Login" />
              <MyLink to={REGISTER} text="Register" />
            </>
          )}
          {user?.role === "SHIPPER" && (
            <MyLink to={"new/load"} text="new load" />
          )}
          {user?.role === "DRIVER" && (
            <MyLink to={"new/truck"} text="new truck" />
          )}
          {user && (
            <>
              <MyLink to={MY_PROFILE} text="Profile" />

              <li className={st.navItemHeader}>hello! {user?.email}</li>

              <li className={st.navItemHeader}>
                <button
                  className="mybutton"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    event.preventDefault();
                    dispatch(setUserData(null));
                    Cookies.remove("jwt");
                    navg(SIGN_IN);
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </WidthWrapper>
  );
};

export default MainNav;
