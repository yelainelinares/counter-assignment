import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter message', () => {
  render(<Counter />);
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const initialCounter = screen.getByTestId('count').textContent;
  expect(initialCounter).toBe('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const counter = screen.getByTestId('count').textContent;
  expect(counter).toBe('0');
  
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const newCounter = screen.getByTestId('count').textContent;
  expect(newCounter).toBe('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const counter = screen.getByTestId('count').textContent;
  expect(counter).toBe('0');

  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const newCounter = screen.getByTestId('count').textContent;
  expect(newCounter).toBe('-1');
});
