export interface UserType {
  email: string;
  role: string;
  created_date: Date;
}

interface AuthState {
  user: UserType | null;
  jwt: string;
}

interface UserAction {
  type: string;
  payload: UserType | null;
}

const authReducer = (
  state: AuthState = { user: null, jwt: "" },
  action: UserAction
) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default authReducer;
