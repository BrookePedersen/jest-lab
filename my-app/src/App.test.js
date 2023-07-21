import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('renders learn react link', () => {
  render(<App />);

  // screen.debug();
  userEvent.click(screen.getByTestId("checkbox"));

  expect(screen.getByTestId("checkbox")).toBeChecked()

//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});
