import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    return (
      <Link
        to="/shopping"
        data-testid="shopping-cart-button"
      >
        <button
          type="button"
        >
          Search
        </button>
      </Link>
    );
  }
}

export default Button;
