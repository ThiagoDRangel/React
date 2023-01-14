import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import { getProductById } from '../services/api';
import { render } from '@testing-library/react';

class Product extends Component {
  state = {
    title: '',
    price: '',
    thumbnail: '',
  };

  async componentDidMount() {
    await this.getProducts();
  }

  getProducts = async () => {
    const { match: { params: { id } } } = this.props;
    const {
      title,
      price,
      thumbnail,
    } = await getProductById(id);
    this.setState({
      title,
      price,
      thumbnail,
    });
  };

  render() {
    const {
      title,
      price,
      thumbnail,
    } = this.state;
    return (
      <div>
        <section>
          <img
            src={ thumbnail }
            alt={ title }
            data-testid="product-detail-image"
          />
        </section>
        <section>
          <div
            data-testid="product-detail-name"
          >
            { title }
          </div>
          <div
            data-testid="product-detail-price"
          >
            { price }
          </div>
        </section>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Product;
