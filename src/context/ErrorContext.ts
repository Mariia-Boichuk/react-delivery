import { createContext } from "react";

export type GlobalContent = {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

export const ErrorContext = createContext<GlobalContent>({
  error: "",
  setError: () => {},
});
