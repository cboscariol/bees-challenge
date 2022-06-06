import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import Header from './index'

test('verify if navigates to login', () => {
  const history = createMemoryHistory({ initialEntries: ['/home'] })
  render(
    <Router location={history.location} navigator={history}>
      <Header />
    </Router>
  );
  const goBackButton = screen.getByText(/Go Back/i)
  userEvent.click(goBackButton)
  expect(history.location.pathname).toBe('/');
});
