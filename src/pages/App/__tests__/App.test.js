import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

afterAll(cleanup);

describe('App', () => {
  it('should render App component', () => {
    render(<App />);
    expect(screen.getByText(/Exchange rates/i)).toBeInTheDocument();
  });
});
