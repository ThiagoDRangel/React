import React, { Component } from 'react';

class App extends Component {
  // usei o construtor/bind para iniciar o this 
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }
  handleButtonOne() {
    console.log('Clicou no botão 1!');
  }

  handleButtonTwo() {
    console.log('Clicou no botão 2!');
  }

  handleButtonThree() {
    console.log('Clicou no botão 3!');
  }

  render() {
    return (
      <section>
        <button
          type="button"
          onClick={ this.handleButtonOne }
        >
          Botão 01
        </button>
        <button
          type="button"
          onClick={ this.handleButtonTwo }
        >
          Botão 02
        </button>
        <button
          type="button"
          onClick={ this.handleButtonThree }
        >
          Botão 03
        </button>
      </section>
    );
  }
}

export default App;
