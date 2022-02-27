import { combineReducers } from "redux";
import loadingReducer from "./loading";
import errorReducer from "./error";

const allReducers = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
});

export default allReducers;
