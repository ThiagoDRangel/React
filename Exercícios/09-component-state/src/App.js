import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    // Nunca alterar valores direto no this.state
    this.setState({
      numeroDeCliques: 1,
    });
  }

  render() {
    // para ler o estado 'this.state.valor-a-ser-lido'
    const { numeroDeCliques } = this.state;
    return (
      <button
        type="button"
        onClick={ this.handleClick }
      >
        { numeroDeCliques }
      </button>
    );
  }
}

export default App;

