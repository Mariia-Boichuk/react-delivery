import axios from "axios";
import React, { useState } from "react";
import { URLadr } from "../../utils/consts";
import ErrorContext from "../../context/ErrorContextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import st from "./Registration.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useSelector, useDispatch } from "react-redux";
import {
  setErrorMes,
  setLoadingFalse,
  setLoadingTrue,
} from "../../reduxFeatures/actions";
import { loadingState } from "../../reduxFeatures/reducers/loading";

export const Registration = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const loading = useSelector<loadingState>((state) => state.loading);

  const { setError } = useContext(ErrorContext);

  const navg = useNavigate();

  const submitHandler = async (event) => {
    dispatch(setLoadingTrue());
    event.preventDefault();

    try {
      const registerData = {
        email,
        password,
        role,
      };
      await axios.post(`${URLadr}/api/auth/register`, registerData);

      dispatch(setLoadingFalse());
    } catch (error) {
      if (error.response?.data?.message) {
        dispatch(setErrorMes(error.response.data.message));
      } else {
        dispatch(setErrorMes("something gone wrong"));
      }

      dispatch(setLoadingFalse());
    }

    navg("/signin");
  };
  return (
    <section>
      {loading ? "registeded" : "not registered"}
      <PageTitle title="Register" />
      <form
        className={st.form}
        onSubmit={(event) => {
          submitHandler(event);
        }}
      >
        <div className={st.formControl}>
          <input
            className={st.input}
            type="email"
            placeholder="Email"
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            value={email}
            name="email"
            required
          />
        </div>
        <div className={st.formControl}>
          <input
            className={st.input}
            type="password"
            placeholder="Password"
            onChange={({ target }) => {
              setPassword(target.value);
            }}
            value={password}
            name="password"
            required
          />
        </div>
        <div className={st.formControl}>
          <input
            className={st.input}
            type="text"
            placeholder="Role"
            onChange={({ target }) => {
              setRole(target.value);
            }}
            value={role}
            name="role"
            required
          />
        </div>
        <button type="submit" className={`mybutton ${st.submit}`}>
          Submit
        </button>
      </form>
    </section>
  );
};
