import React from "react";
import { render, screen } from "@testing-library/react";
import Create from "./Create";

test('renders "It works"', () => {
  render(<Create />);
  const element = screen.getByText(/it works/i);
  expect(element).toBeInTheDocument();
});
