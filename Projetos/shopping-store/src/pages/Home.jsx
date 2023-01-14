import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import RadioButon from '../components/RadioButon';
import ProductCard from '../components/ProductCard';
import {
  getProductsFromCategoryAndQuery,
  getCategories,
  getCategoryId,
} from '../services/api';

class Home extends Component {
  state = {
    search: '',
    filtro: '',
    apiResults: [],
    categories: [],
    cart: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories })
  }

  componentDidUpdate(prevState) {
    const { cart } = this.state;
    if (prevState.cart !== cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    }, () => name === 'filtro' && this.handleCategoryId()
    );
  };

  // renderiza ao clicar
  onSaveButton = async () => {
    const { search } = this.state;
    const queryApi = await getProductsFromCategoryAndQuery(
      '', search);
    this.setState({
      apiResults: queryApi.results
    });
  };

  handleCategoryId = async () => {
    const { filtro } = this.state;
    const categoryApi = await getCategoryId(filtro);
    this.setState({
      apiResults: categoryApi
    });
  };

  addToCart = (product) => {
    this.setState((prevState) => {
      const { cart } = prevState;
      cart.push(product);
      return { cart };
    });
  };

  render() {
    const {
      search,
      apiResults,
      categories
    } = this.state;

    return (
      <div>
        { apiResults
          .length < 1 && (
            <span
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </span>
          )}
        <section>
          <Button
            onSaveButton={ this.onSaveButton }
            testid="query-button"
          />
          <Input
            value={ search }
            onInputChange={ this.onInputChange }
          />
        </section>
        
        { categories.length > 0 && categories
          .map((category) => (
            <RadioButon
              key={ category.id }
              id={ category.id }
              name={ category.name }
              onInputChange={ this.onInputChange }
            />
          ))}

        <Link
          to="/shoppingCart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>

        { apiResults.length > 0 ? (
          apiResults
            .map((item) => (
              <div
                key={ item.id }
                data-testid="product"
              >
                <p>{ item.title }</p>
                <button
                  type="button"
                  data-testid="product-add-to-cart"
                  onClick={ () => this.addToCart(item) }
                >
                  Adicionar ao carrinho
                </button>
              </div>
              ))
            ) : (
          <span>Nenhum produto foi encontrado</span>
          )}
      </div>
    );
  }
}

export default Home;
