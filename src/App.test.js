import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can receive a new user and show it on a list', () => {
  // Render the component
  render(<App />);

  //Select the input fields
  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });
  const button = screen.getByRole('button');

  // Add the input on name field
  user.click(nameInput);
  user.keyboard('chitra');

  // Add the input on email field
  user.click(emailInput);
  user.keyboard('chitra@gmail.com');

  user.click(button);

  const name = screen.getByRole('cell', { name: 'chitra' });
  const email = screen.getByRole('cell', { name: 'chitra@gmail.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
