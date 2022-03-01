import { combineReducers } from "redux";
import lodErrReducer from "./reducer";

const allReducers = combineReducers({
  lodErr: lodErrReducer,
});

export default allReducers;
