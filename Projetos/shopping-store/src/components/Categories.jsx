import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { getSelected } = this.props;
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

Categories.propTypes = {
  getSelected: PropTypes.func.isRequired,
}

export default Categories;
