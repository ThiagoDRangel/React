import React, { Component } from 'react';
import Input from '../components/Input';

class Home extends Component {
  render() {
    return (
      <div>
        <Input />
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

export default Home;
