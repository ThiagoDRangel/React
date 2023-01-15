import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  };
  state = {
    numeroDeCliques: 0,
  };

  handleClick() {
    // Nunca alterar valores direto no this.state
    //a callback _garante a ordem das atualizações
    this.setState((prevState, _props) => ({
      numeroDeCliques: prevState.numeroDeCliques + 1,
    }));
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

