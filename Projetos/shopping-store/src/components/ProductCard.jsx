import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const {
      title,
      thumbnail,
      price,
      id,
    } = this.props;
    return (
      <div
        data-testid="product"
      >
        <Link
          to={ `/product/${ id }` }
          data-testid="product-detail-link"
        >
          <img
            src={ thumbnail }
            alt="product"
          />
        </Link>
        <div>
          { title }
        </div>
        <p>
          { price }
        </p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  price: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
