import MyRouter from "./components/Router/MyRouter";
import { useCallback, useEffect } from "react";
import { URLadr } from "./utils/consts";
import useRequest from "./utils/useRequest";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUserData } from "./reduxFeatures/actions/index";
import { UserI } from "./reduxFeatures/reducers/authReducer";
import Header from "./components/HeaderAndNavigation/Header/Header";

export type MeResponseData = {
  user: UserI;
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchData } = useRequest();

  const getMe = useCallback(async (jwt) => {
    const resp = await fetchData<MeResponseData>({
      method: "get",
      url: `${URLadr}/api/users/me`,
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
    <div>
      <Header />
      <MyRouter />
    </div>
  );
};

export default App;
