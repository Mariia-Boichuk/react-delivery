import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { screen, render, fireEvent, getByText } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import allReducers from "../../reduxFeatures/reducers/index";

const renderWithReduxAndRouter = (component) => {
  const store = createStore(allReducers);
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter> {component} </BrowserRouter>
      </Provider>
    ),
  };
};

it("checks register link", () => {
  renderWithReduxAndRouter(<Header />);
  const signupLink = screen.getByText(/register/i);
  expect(signupLink).toBeInTheDocument();
});

it("checks register link active", () => {
  renderWithReduxAndRouter(<Header />);
  const signupLink = screen.getByText(/register/i);
  fireEvent.click(signupLink);
  expect(signupLink).toHaveClass("forActive");
});

it("checks register link unactive after clicking on another", () => {
  renderWithReduxAndRouter(<Header />);
  const signupLink = screen.getByText(/register/i);
  const loginLink = screen.getByText(/login/i);
  fireEvent.click(signupLink);
  expect(signupLink).toHaveClass("forActive");
  fireEvent.click(loginLink);
  expect(signupLink).not.toHaveClass("forActive");
});
