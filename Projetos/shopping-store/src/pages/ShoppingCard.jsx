import React, { Component } from 'react';
import Button from '../components/Button';

class ShoppingCard extends Component {

  render() {
    
    return (
      <section>
        <Button />
        <h2>Carrinho de compras</h2>
        <span data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio 
        </span>
      </section>
    );
  }
}

export default ShoppingCard;
