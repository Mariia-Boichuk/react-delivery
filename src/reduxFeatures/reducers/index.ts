import { combineReducers } from "redux";
import requestReducer from "./requestReducer";
import authReducer from "./authReducer";

const allReducers = combineReducers({
  request: requestReducer,
  auth: authReducer,
});

export default allReducers;
