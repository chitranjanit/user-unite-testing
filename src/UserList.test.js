import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
  const users = [
    { name: 'chitra', email: 'chitra@gmail.com' },
    { name: 'kavi', email: 'kavi@gmail.com' },
  ];
  render(<UserList users={users} />);

  return {
    users,
  };
}

test('render one row per user', () => {
  // Render the component
  renderComponent();

  // Find all the rows in the table
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('render the mail and name of each user', () => {
  // Render the component
  const { users } = renderComponent();

  // Loop the user
  for (let user of users) {
    // Select the cell of name & email
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    // Expect the name and email is exact
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
