import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.queryByTestId('child')).toHaveStyle({margin: '1px'});
  expect(screen.queryByTestId('child')).not.toBeVisible();
  userEvent.hover(screen.getByTestId('parent'));
  expect(screen.queryByTestId('child')).toBeVisible()
});
