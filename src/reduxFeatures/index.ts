import { combineReducers } from "redux";
import requestReducer from "./request/requestReducer";
import authReducer from "./auth/authReducer";

const allReducers = combineReducers({
  request: requestReducer,
  auth: authReducer,
});

export default allReducers;
