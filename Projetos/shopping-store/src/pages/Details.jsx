import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import { getProductById } from '../services/api';

class Details extends Component {
  state = {
    product: '',
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const returnAPI = await getProductById(id);
    this.setState({
      product: returnAPI,
    });
  }

  render() {
    const { product } = this.state;
    return (
        <ProductCard propsCard={ product } />
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Details;
