import { render, screen } from '@testing-library/react';
import App from './App';

test('01 - renders learn react', () => {
  render(<App />);
  const linkElement = screen.getByText("Learn React");
  expect(linkElement).toBeInTheDocument();
});

test('02 - Verificando se existe o campo Email.', () => {
  render(<App />)
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

/* // Testando um único botão
it('03 - Verificando se existe um botão', () => {
  render(<App />);
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
}) */

// Testando - quantidade de botões em toHavalength(2)
it('04 - Verificando se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});
