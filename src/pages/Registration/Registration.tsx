import axios from "axios";
import React, { useState } from "react";
import { URLadr } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import st from "./Registration.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useSelector, useDispatch } from "react-redux";
import { State, StatusType } from "../../reduxFeatures/reducers/reducer";
import {
  setLoading,
  setMes,
  setStatus,
} from "../../reduxFeatures/actions/index";

export const Registration = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const loading = useSelector<State>((state) => state.lodErr.loading);

  const navg = useNavigate();

  const submitHandler = async (event) => {
    dispatch(setLoading(true));
    event.preventDefault();

    try {
      const registerData = {
        email,
        password,
        role,
      };
      await axios.post(`${URLadr}/api/auth/register`, registerData);

      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setStatus(StatusType.error));

      if (error.response?.data?.message) {
        dispatch(setMes(error.response.data.message));
      } else {
        dispatch(setMes("something gone wrong"));
      }

      dispatch(setLoading(false));
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
