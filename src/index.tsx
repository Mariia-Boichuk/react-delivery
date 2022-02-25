import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContextProvider";
import { ErrorContextProvider } from "./context/ErrorContextProvider";
import LoaderContextProvider from "./context/LoaderContextProvider";
import { createStore } from "redux";

//action crea
const setLoadingTrue = () => {
  return {
    type: "START_LOADING",
  };
};

const setLoadingFalse = () => {
  return {
    type: "FINISH_LOADING",
  };
};

//reducer
const loading = (state = false, action) => {
  switch (action.type) {
    case "START_LOADING":
      return true;

    case "FINISH_LOADING":
      return false;
    default:
      return state;
  }
};

ReactDOM.render(
  <React.StrictMode>
    <LoaderContextProvider>
      <ErrorContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthContextProvider>
      </ErrorContextProvider>
    </LoaderContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
