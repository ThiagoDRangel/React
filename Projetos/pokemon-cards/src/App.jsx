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
      <main className="App">
        <img src={ logo } alt="Logo" />

        <h3>Pesquise um Pokemon</h3>
        <div>
          <input
            type="text"
            className="form_input"
            onChange=""
            data-testid="input-text"
            value=""
          />
          <button
            onClick=""
          >
            Pesquisar
          </button>
        </div>
        <div>
          
        </div>
      </main>
    );
  }
}

export default App;

