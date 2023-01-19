# Iniciando projeto

##
--> npx create-react-app 'nome-do-projeto

Instalando dependências
# react-router-dom
# history
# @testing-library/react

--> npm i react-router-dom@v5

# Erro esperado

--> You should not use <'Link'> outside a <'Router'>

# Criar uma função helper

// src/renderWithRouter.js
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};
export default renderWithRouter;