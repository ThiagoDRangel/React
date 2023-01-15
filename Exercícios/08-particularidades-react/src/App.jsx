import React, { Component } from 'react';

class App extends Component {
  handleClick() {
    // Essa chamada ao this returna undefined?
    console.log(this)
    console.log('Clicou')
  }
  render() {
    /* Já essa chamada ao this
    feita de dentro da função render
    retorna o objeto esperado */
    console.log(this)
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
