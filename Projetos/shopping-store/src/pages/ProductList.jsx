import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductList extends Component {
  state = {
    products: [],
    search: '',
    selected: '',
  };

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
      selected: '',
    });
  };

  handleSubmit = async () => {
    const { search, selected } = this.state;
    const response = await getProductsFromCategoryAndQuery(
      selected, search);
    this.setState({
      products: response.results,
    });
  };

  getSelected = ({ target }) => {
    this.setState({
      selected: target.value,
      search: '',
    }, this.handleSubmit);
  };

  render() {
    const { products, search } = this.state;
    return (
      <section>
        <input
          type="text"
          id="search"
          value={ search }
          data-testid="query-input"
          onChange={ this.handleChange }
          autoComplete="off"
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleSubmit }
          value="Pesquisar"
        >
          Pesquisar
        </button>
        <Link
          to="shopping"
          data-testid="shopping-cart-button"
        >
          <button
            type="button"
          >
            Carrinho
          </button>
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <main>
          { products.length !== 0 ? products
            .map((product) => (
              <ul>
                  <li
                    data-testid="product"
                    key={ product.id }
                  ></li>
                  <li>{ product.title }</li>
                  <li>
                    <img 
                      src={ product.thumbnail }
                      alt={ product.name }
                    />
                  </li>
                  <li>{ `R$ ${product.price.toFixed(2)}`}
                  </li>
              </ul>
            )) : 'Nenhum produto foi encontrado'}
        </main>
        <Categories
          getSelected={ ({ target }) => this.getSelected({
            target }) }
        />
      </section>
    );
  }
}

export default ProductList;
