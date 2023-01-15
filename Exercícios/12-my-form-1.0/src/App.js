import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      estadoFavorito: '',
      name: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">

          <label htmlFor="name">
            Nome:
            <input
              id="name"
              name="name"
              type="text"
              value={ this.state.name }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              value={ this.state.email }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="age">
            Idade:
            <select
              id="age"
              name="age"
              defaultValue=""
              value={ this.state.idade }
              onChange={ this.handleChange }
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>

          <label htmlFor="anecdote">
            Anedota:
            <textarea id="anecdote" name="anecdote" value={ this.state.textarea } onClick={ this.handleChange } />
          </label>

        </form>
      </div>
    );
  }
}

export default App;
