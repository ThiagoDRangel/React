import { screen } from '@testing-library/react';
import { About } from '../App';
import renderWithRouter from '../services/renderWithRouter';

it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });