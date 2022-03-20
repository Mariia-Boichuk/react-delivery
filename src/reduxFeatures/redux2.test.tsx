import { Provider } from "react-redux";
import App from "../App";
import { render, fireEvent, screen } from "@testing-library/react";
import { createTestStore } from "../utils/test";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
let store;
describe("Your test", () => {
  beforeEach(() => {
    store = createTestStore();
  });
  test("Your component with a full reducer flow", async () => {
    // Create a redux store
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    await screen.findByText("Login");
  });

  test("Your component with a full reducer flow action", async () => {
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

  test("invalid email renders", async () => {
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

  test("Your component with a full reducer flow  sumbit", async () => {
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
