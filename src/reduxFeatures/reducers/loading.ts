import { ActionSet } from "../actions";
export interface loadingState {
  loading: boolean;
  error: string;
}
const loadingReducer = (state: boolean = false, action: ActionSet) => {
  switch (action.type) {
    case "START_LOADING":
      return true;

    case "FINISH_LOADING":
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
