import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCard extends Component {

  render() {
    
    return (
      <section>
        <Link to="/">
        <button type="button">voltar</button>
        </Link>
        <h2>Carrinho de Compras</h2>
        <span
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </span>
      </section>
    );
  }
}

export default ShoppingCard;
