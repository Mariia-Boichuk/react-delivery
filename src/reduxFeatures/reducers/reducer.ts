import { ActionSet } from "../actions";

export enum StatusType {
  error = "error",
  success = "success",
  warning = "warning",
  noStatus = "noStatus",
}

export interface State {
  lodErr: { loading: boolean; message: string; status: StatusType };
}

const lodErrReducer = (
  state = { loading: false, status: StatusType.noStatus, message: "" },
  action: ActionSet
) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, message: action.payload.message };

    case "SET_STATUS":
      return { ...state, status: action.payload.newStatus };

    case "SET_LOADING":
      return { ...state, loading: action.payload.isLoading };

    default:
      return state;
  }
};

export default lodErrReducer;
