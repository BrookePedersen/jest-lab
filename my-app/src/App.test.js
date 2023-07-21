import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('Class: testing checkbox', () => {
  render(<App />);
  // screen.debug();
  userEvent.click(screen.getByTestId("checkbox"));
  expect(screen.getByTestId("checkbox")).toBeChecked()
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});
test('testing for the words hello world', () => {
  render(<App />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
  const button = screen.getByRole('button');
  userEvent.click(button);
});


// npm install --save-dev jest