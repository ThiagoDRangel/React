import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  state = {
    categories: [],
  };
  
  componentDidMount() {
    this.loadingCategories();
  }

  loadingCategories = () => {
    getCategories()
      .then((data) => this.setState({
        categories: data,
      }));
  };

  render() {
    const { categories } = this.state;
    return (
      <section>
        <h2>Categorias</h2>
        { categories.map((categorie) => (
          <button
            key={ categorie.id }
            data-testid="category"
            type="button"
          >
            { categorie.name }
          </button>
        ))}
      </section>
    );
  }
}

export default Categories;
