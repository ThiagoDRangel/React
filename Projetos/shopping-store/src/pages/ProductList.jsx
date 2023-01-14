import React, { Component } from 'react';
import Button from '../components/Button';
import Categories from '../components/Categories';

class ProductList extends Component {
  render() {
    return (
      <section>
        <input type="text" />
        <Button />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categories />
      </section>
    );
  }
}

export default ProductList;
