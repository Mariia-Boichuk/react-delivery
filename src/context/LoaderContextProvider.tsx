import { createContext, useMemo, useState } from "react";
import { PendingView } from "../components/PendingView/PendingView";
type GlobalContent = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
export const LoaderContext = createContext<GlobalContent>({
  isLoading: false,
  setIsLoading: () => {},
});

const LoaderContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const value = useMemo(() => ({ isLoading, setIsLoading }), [isLoading]);
  return (
    <LoaderContext.Provider value={value}>
      {isLoading && <h1>hHHHHHHHHHHHHHHHHHHHHH 99 HJKLLKKKKKKKKKKK</h1>}{" "}
      {props.children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
