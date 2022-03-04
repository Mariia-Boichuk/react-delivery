import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import st from "./MainNav.module.css";
import { MY_PROFILE, SIGN_IN, REGISTER } from "../../utils/routes";
import Cookies from "js-cookie";
import { setUserData } from "../../reduxFeatures/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../reduxFeatures/reducers/reducer";

const MainNav: React.FC = () => {
  const navg = useNavigate();
  const user = useSelector((state: State) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <div className="wrapper">
      <nav>
        <ul className={st.navListHeader}>
          {!user && (
            <li className={st.navItemHeader}>
              <NavLink
                to={SIGN_IN}
                className={({ isActive }) => (isActive ? st.forActive : "")}
              >
                Login
              </NavLink>
            </li>
          )}
          {!user && (
            <>
              <li className={st.navItemHeader}>
                <NavLink
                  to={REGISTER}
                  className={({ isActive }) => (isActive ? st.forActive : "")}
                >
                  Signup
                </NavLink>
              </li>
            </>
          )}
          {user?.role === "SHIPPER" && (
            <li className={st.navItemHeader}>
              <NavLink
                className={({ isActive }) => (isActive ? st.forActive : "")}
                to="/new/load"
              >
                New load
              </NavLink>
            </li>
          )}
          {user?.role === "DRIVER" && (
            <li className={st.navItemHeader}>
              <NavLink
                to="/new/truck"
                className={({ isActive }) => (isActive ? st.forActive : "")}
              >
                New truck
              </NavLink>
            </li>
          )}
          {user && (
            <>
              <li className={st.navItemHeader}>
                <NavLink
                  to={MY_PROFILE}
                  className={({ isActive }) => (isActive ? st.forActive : "")}
                >
                  Profile
                </NavLink>
              </li>

              <li className={st.navItemHeader}>hello! {user?.email}</li>

              <li className={st.navItemHeader}>
                <button
                  className="mybutton"
                  onClick={(event) => {
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
    </div>
  );
};

export default MainNav;
