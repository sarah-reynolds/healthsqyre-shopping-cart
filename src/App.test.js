import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shopping cart link', () => {
  render(<App />);
  const linkElement = screen.getByText(/View Cart/i);
  expect(linkElement).toBeInTheDocument();
});
