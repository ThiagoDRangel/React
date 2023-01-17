import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>Learn React</h1>
        <label htmlFor="id-email">
          Email
          <input type="email" id="id-email" />
        </label>
      </main>
    );
  }
}

export default App;
