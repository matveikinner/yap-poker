import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders "It works"', () => {
  render(<App />);
  const element = screen.getByText(/it works/i);
  expect(element).toBeInTheDocument();
});
