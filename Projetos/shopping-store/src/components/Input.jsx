import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { value, onInputChange } = this.props;
    return (
      <input
        type="text"
        data-testid="query-input"
        value={ value }
        id="search"
        name="search"
        onChange={ onInputChange }
      />
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;