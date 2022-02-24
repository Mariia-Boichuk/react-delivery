import React, { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { URLadr } from "../utils/consts";
import { LoaderContext } from "./LoaderContextProvider";
import { useContext, useMemo } from "react";

function AuthContextProvider(props) {
  const [jwt, setJwt] = useState("");
  const [user, setUser] = useState(null);
  const { setIsLoading } = useContext(LoaderContext);

  const getMe = useCallback(async (jwt) => {
    try {
      setIsLoading(true);
      const resp = await axios.get(`${URLadr}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-type": "application/json",
        },
      });
      setUser(resp.data.user);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setJwt(localStorage.getItem("jwt"));
    if (jwt) {
      getMe(jwt);
    }
  }, [jwt]);

  const value = useMemo(() => ({ jwt, setJwt, user, setUser }), [jwt, user]);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
