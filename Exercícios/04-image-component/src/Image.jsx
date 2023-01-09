import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;