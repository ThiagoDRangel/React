import React, { Component } from 'react';
import { getCategories } from '../services/api';
import PropTypes from 'prop-types';

class RadioButon extends Component {
  state = {
    categorie: [],
  };

render() {
  const { id, name, onInputChange } = this.props;
  return (
    <label
      htmlFor={ id }
      data-testid="category"
    >
      { name }
      <input
        onChange={ onInputChange }
        type="radio"
        name={ id }
        id={ id }
        value={ id }
      />
    </label>
    );
  }
}

RadioButon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  handleCategory: PropTypes.func.isRequired,
};

export default RadioButon;

