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

export type MeResponseData = {
  user: UserType;
};

const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchData } = useRequest();

  const fetchColorData = async (jwt) => {
    const colorPromise = fetchData<MeResponseData>({
      method: "get",
      url: `${DEVELOPMENT_URL}/api/users/me`,
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-type": "application/json",
      },
    });
    //   dispatch(setUserData(resp.user));
    return {
      color: wrapPromise(colorPromise),
    };
  };
  const resource: any = fetchColorData(Cookies.get("jwt"));

  const user = useSelector((state: State) => state.auth.user);

  const setUser = (param) => {
    dispatch(setUserData(param));
  };

  useEffect(() => {
    if (Cookies.get("jwt")) {
      resource.color.read();
    }
  }, []);

  return (
    <div>
      <Header setUser={setUser} user={user} />
      <Router />
    </div>
  );
};

export default App;
