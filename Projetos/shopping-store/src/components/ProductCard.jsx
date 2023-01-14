import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { propsCard } = this.props;
    const { title, thumbnail, price } = propsCard;

    return (
      
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to="/shopping"
        >
          <button
            data-testid="shopping-cart-button"
            type="button"
        >
          Retornar ao carrinho
        </button>
        </Link>
        <img
          data-testid="product-detail-image"
          src={ thumbnail }
          alt="product"
        />
        <h3
          data-testid="product-detail-name"
        >
          { title }
        </h3>
        <h3
          data-testid="product-detail-price"
        >
          { price }
        </h3>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
  details: PropTypes.string,
}.isRequired;

export default ProductCard;
