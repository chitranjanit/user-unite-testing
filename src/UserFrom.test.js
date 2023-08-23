import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import UserForm from './UserFrom';

test('it shows two inputs and a button', () => {
  // render the component
  render(<UserForm />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // Assertion - make sure the component is doing
  // what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls unUserAdd when the form is submitted', () => {
  // NOT THE BEST IMPLEMENTATION
  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };

  // Try to render my component
  render(<UserForm onUserAdd={callback} />);

  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  // Simulate typing in an name
  user.click(nameInput);
  user.keyboard('chitra');

  // Simulate typing in an email
  user.click(emailInput);
  user.keyboard('chitra@gmail.com');

  // Find the button
  const button = screen.getByRole('button');

  // Simulate clicking the button
  user.click(button);

  // Assertion to make sure 'unUserAdd' get called with email/name
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: 'chitra', email: 'chitra@gmail.com' });
});
