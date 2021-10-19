import React from "react";
import { render, screen } from "@testing-library/react";
import Session from "./Session";

test('renders "It works"', () => {
  render(<Session />);
  const element = screen.getByText(/it works/i);
  expect(element).toBeInTheDocument();
});
