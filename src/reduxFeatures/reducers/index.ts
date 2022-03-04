import { combineReducers } from "redux";
import requestReducer from "./reducer";
import authReducer from "./authReducer";

const allReducers = combineReducers({
  request: requestReducer,
  auth: authReducer,
});

export default allReducers;
