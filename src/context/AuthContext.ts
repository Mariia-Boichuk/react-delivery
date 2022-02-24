import { createContext } from "react";

export type GlobalContent = {
  jwt: string;
  setJwt: React.Dispatch<React.SetStateAction<string>>;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

export const AuthContext = createContext<GlobalContent>({
  jwt: null,
  setJwt: () => {},
  user: null,
  setUser: () => {},
});
