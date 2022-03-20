import React from "react";
import { createStore } from "redux";
import { Provider, useSelector } from "react-redux";
import { screen, render, fireEvent, getByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header/Header";
import allReducers from "./reducers/index";
import { BrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import App from "../App";
import { setUserData } from "./actions/index";
import { State } from "./reducers/reducer";

const renderWithReduxAndRouter = (component) => {
  const store = createStore(allReducers);
  return render(
    <Provider store={store}>
      <BrowserRouter> {component} </BrowserRouter>
    </Provider>
  );
};

// describe("Redux testing", () => {
//   it("checks login", () => {
//     const store = createStore(allReducers);

//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </Provider>
//     );

//     setUserData({
//       email: "nas@mail.ru",
//       role: "SHIPPER",
//       created_date: new Date(),
//     });
//     const header = screen.getByText(/profile/i);
//     expect(header).toBeInTheDocument();
//   });

//   it("checks user", () => {
//     renderWithReduxAndRouter(<App />);
//     const header = screen.getByText("Login");
//     expect(header).toHaveTextContent("Login");
//   });
// });

// describe("Redux testing 2", () => {
//   it("checks summit form", () => {
//     renderWithReduxAndRouter(<App />);
//     const submit = screen.getByText("Submit");
//     const inputEmail: HTMLInputElement = screen.getByPlaceholderText("Email");
//     const inputPass: HTMLInputElement = screen.getByPlaceholderText("password");
//     // userEvent.type(inputEmail, "nastyaemail.ru");
//     fireEvent.blur(inputEmail);
//     // fireEvent.change(inputPass, { target: { value: "12345" } });
//     userEvent.click(submit);
//     expect(screen.getByText(/invalid/)).toBeInTheDocument();
//   });
// });

it("checks summit form", () => {
  renderWithReduxAndRouter(<App />);
  const inputEmail: HTMLInputElement = screen.getByPlaceholderText("Email");
  userEvent.type(inputEmail, "nastya@email.ru");
  expect(screen.getByPlaceholderText("Email")).toHaveValue("nastya@email.ru");
});
