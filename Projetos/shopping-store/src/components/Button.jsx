import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onSaveButton } = this.props;
    return (
      <button
        type="button"
        onClick={ onSaveButton }
        data-testid="query-button"
    >
        Buscar
    </button>
    );
  }
}

Button.propTypes = {
  onSaveButton: PropTypes.func.isRequired,
};

export default Button;
