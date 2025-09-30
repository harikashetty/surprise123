import { render, screen } from '@testing-library/react';
import App from './App';

test('renders birthday heading', () => {
  render(<App />);
  const heading = screen.getByText(/happy birthday my friend/i);
  expect(heading).toBeInTheDocument();
});
