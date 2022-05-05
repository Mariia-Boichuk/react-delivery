import React from "react";
import { render, screen } from "@testing-library/react";
import InputText from "./InputText";

test("renders error text", () => {
  render(
    <InputText
      value="123"
      name="email"
      placeholder="email"
      type="email"
      error="invalid email"
      onChange={() => {}}
    />
  );
  const linkElement = screen.getByText(/invalid email/i);
  expect(linkElement).toBeInTheDocument();
});
