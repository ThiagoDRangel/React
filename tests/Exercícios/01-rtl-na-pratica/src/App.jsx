import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>Learn React</h1>
        <label htmlFor="id-email">
          Email
          <input type="email" id="id-email" />
        </label>
        <input
          type="button"
          id="btn-send"
          value="Enviar"
          data-testid="id-send"
        />
        <input
          type="button"
          id="btn-back"
          value="voltar"
        />
      </main>
    );
  }
}

export default App;
