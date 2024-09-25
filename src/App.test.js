import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App component', () => {

  test('renders counter header', () => {
    render(<App />);
    const headerElement = screen.getByText(/React Counter/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders initial counter value of 0', () => {
    render(<App />);
    const counterElement = screen.getByText('0');
    expect(counterElement).toBeInTheDocument();
  });

  test('increments counter when Increase button is clicked', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Increase/i);
    fireEvent.click(buttonElement);
    const counterElement = screen.getByText('1');
    expect(counterElement).toBeInTheDocument();
  });

  test('decrements counter when Decrease button is clicked', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Increase/i);
    fireEvent.click(buttonElement);  // increase first to go above 0
    const decreaseButtonElement = screen.getByText(/Decrease/i);
    fireEvent.click(decreaseButtonElement);
    const counterElement = screen.getByText('0');
    expect(counterElement).toBeInTheDocument();
  });

  test('resets counter when AC button is clicked', () => {
    render(<App />);
    const increaseButtonElement = screen.getByText(/Increase/i);
    fireEvent.click(increaseButtonElement);  // increase first to have non-zero value
    const acButtonElement = screen.getByRole('button', { name: /AC/i });  // Use getByRole to find the button
    fireEvent.click(acButtonElement);
    const counterElement = screen.getByText('0');
    expect(counterElement).toBeInTheDocument();
  });

});
