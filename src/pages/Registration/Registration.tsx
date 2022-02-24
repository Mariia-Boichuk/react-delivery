import axios from "axios";
import React, { useState } from "react";
import { URLadr } from "../../utils/consts";
import ErrorContext from "../../context/ErrorContextProvider";
import { LoaderContext } from "../../context/LoaderContextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import st from "./Registration.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { setError } = useContext(ErrorContext);
  const { setIsLoading } = useContext(LoaderContext);
  const navg = useNavigate();

  const submitHandler = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    try {
      const registerData = {
        email,
        password,
        role,
      };
      await axios.post(`${URLadr}/api/auth/register`, registerData);
      setIsLoading(false);
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("something gone wrong");
      }
      setIsLoading(false);
    }

    navg("/signin");
  };
  return (
    <section>
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
