import React, { useMemo, useState } from "react";
import { ErrorContext } from "./ErrorContext";
import Modal from "../components/Modal/Modal";

function ErrorContextProvider(props) {
  const [error, setError] = useState("");
  const value = useMemo(() => ({ error, setError }), [error]);
  return (
    <ErrorContext.Provider value={value}>
      {props.children}
      {error && <Modal mes={error} />}
    </ErrorContext.Provider>
  );
}

export default ErrorContext;
export { ErrorContextProvider };
