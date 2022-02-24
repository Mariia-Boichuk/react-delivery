import axios from "axios";
import React, { useContext, useState } from "react";
import { URLadr } from "../../utils/consts";
import { AuthContext } from "../../context/AuthContext";
import ErrorContext from "../../context/ErrorContextProvider";
import { LoaderContext } from "../../context/LoaderContextProvider";
import st from "../Registration/Registration.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setJwt } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);
  const { setIsLoading } = useContext(LoaderContext);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const loginData = {
        email,
        password,
      };
      const resp = await axios.post(`${URLadr}/api/auth/login`, loginData);
      setJwt(resp.data.jwt_token);

      localStorage.setItem("jwt", resp.data.jwt_token);
      setIsLoading(false);
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("something gone wrong");
      }
      setIsLoading(false);
    }
  };
  return (
    <section>
      <PageTitle title="Log in" />
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

        <button type="submit" className={`mybutton ${st.submit}`}>
          Submit
        </button>
      </form>
    </section>
  );
};
