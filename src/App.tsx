import { useCallback, useEffect } from "react";
import useRequest from "./utils/useRequest";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { UserType } from "./reduxFeatures/auth/authReducer";
import { State } from "./reduxFeatures/request/requestReducer";
import { setUserData } from "./reduxFeatures/auth/authActions";
import { DEVELOPMENT_URL } from "./utils/consts";
import Router from "./components/Router/Router";
import Header from "./components/HeaderAndNavigation/Header/Header";
import { BrowserRouter } from "react-router-dom";

export type MeResponseData = {
  user: UserType;
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchData } = useRequest();

  const user = useSelector((state: State) => state.auth.user);

  const setUser = (param) => {
    dispatch(setUserData(param));
  };

  const getMe = useCallback(async (jwt) => {
    const resp = await fetchData<MeResponseData>({
      method: "get",
      url: `${DEVELOPMENT_URL}/api/users/me`,
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-type": "application/json",
      },
    });
    dispatch(setUserData(resp.user));
  }, []);

  useEffect(() => {
    if (Cookies.get("jwt")) {
      getMe(Cookies.get("jwt"));
    }
  }, []);

  return (
    <BrowserRouter>
      <Header setUser={setUser} user={user} />
      <Router />
    </BrowserRouter>
  );
};

export default App;
