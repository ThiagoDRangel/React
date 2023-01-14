import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onSaveButton, testid, buttonText } = this.props;
    return (
      <button
        type="button"
        onClick={ onSaveButton }
        data-testid={ testid }
    >
        { buttonText }
    </button>
    );
  }
}

Button.propTypes = {
  onSaveButton: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
};

export default Button;
