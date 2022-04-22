import { Provider } from "react-redux";
import App from "../App";
import { render, fireEvent, screen } from "@testing-library/react";
import { createTestStore } from "../utils/test";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createStore } from "redux";
import allReducers from "./index";

const renderWithReduxAndRouter = (component) => {
  const store = createStore(allReducers);
  return render(
    <Provider store={store}>
      <BrowserRouter> {component} </BrowserRouter>
    </Provider>
  );
};

let store;
describe("testing login page", () => {
  beforeEach(() => {
    store = createTestStore();
  });

  it("renders log in title", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    await screen.findByText("Log in");
  });

  it("renders error text no email", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const subm = await screen.findByText("Submit");
    fireEvent.click(subm);
    await screen.findByText(/enter email/i);
  });

  it("invalid email renders", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const subm = await screen.findByText("Submit");
    fireEvent.click(subm);
    const inputEmail: HTMLInputElement = screen.getByPlaceholderText("Email");
    userEvent.type(inputEmail, "nastyaemail.ru");
    fireEvent.blur(inputEmail);
    await screen.findByText(/invalid/i);
  });

  it("redux flow after sumbit should render spinner", async () => {
    // Create a redux store
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const inputEmail: HTMLInputElement = screen.getByPlaceholderText("Email");
    const inputPass: HTMLInputElement = screen.getByPlaceholderText("password");
    userEvent.type(inputEmail, "nasty@aemail.ru");
    fireEvent.blur(inputEmail);
    fireEvent.change(inputPass, { target: { value: "12345" } });

    const subm = await screen.findByText("Submit");
    fireEvent.click(subm);
    await screen.findByAltText("spinner");
  });
});

it("should render value in input", () => {
  renderWithReduxAndRouter(<App />);
  const inputEmail: HTMLInputElement = screen.getByPlaceholderText("Email");
  userEvent.type(inputEmail, "nastya@email.ru");
  expect(screen.getByPlaceholderText("Email")).toHaveValue("nastya@email.ru");
});
