import React, { Component } from 'react';

class App extends Component {
  constructor() {
  super();
  this.state = {
    cards: undefined,
    pokemon: "",
  };
}

  render() {
    const { cards, pokemon } = this.state;
    return (
      <h3>Pesquise um Pokemon</h3>
    );
  }
}

export default App;

