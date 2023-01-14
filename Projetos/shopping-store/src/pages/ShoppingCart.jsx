import React, { Component } from 'react';
import ListedProduct from '../components/ListedProduct';

class ShoppingCart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.setState({ cart });
  }

  render() {
    const { cart } = this.state;
    return (
      <div
        data-testid="shopping-cart-empty-message"
        key="id"
      >
       {
          cart.map((product, index) => (
            <ListedProduct
              key={ product.id + index }
              productName={ product.title }
              productValue={ product.price }
              productThumbnail={ product.thumbnail }
              productQuantity={ 1 }
            />
          ))
        }

        Seu carrinho está vazio
      </div>
    );
  }
}

export default ShoppingCart;
