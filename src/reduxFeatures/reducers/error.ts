import { ActionSet } from "../actions";
export interface loadingState {
  loading: boolean;
  error: string;
}
const errorReducer = (state: string = "", action: ActionSet) => {
  switch (action.type) {
    case "CLEAR_ERROR":
      return "";

    case "SET_ERROR":
      return action.payload;
    default:
      return state;
  }
};

export default errorReducer;
