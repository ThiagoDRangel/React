import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    console.log('Clicou!')
    console.log(this)
  }

  render() {
    return (
      <button
        onClick={ this.handleClick }
      >
        Meu botão
      </button>
    );
  }
}

export default App;
