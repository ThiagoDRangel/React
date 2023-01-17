import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react', () => {
  render(<App />);
  const linkElement = screen.getByText("Learn React");
  expect(linkElement).toBeInTheDocument();
});

test('Verificando se existe o campos Email.', () => {
  render(<App />)
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});
