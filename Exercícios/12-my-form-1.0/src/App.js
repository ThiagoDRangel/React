import React, { Component } from 'react';
import SelectInput from './components/SelectInput';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    // Usado apenas em ckeckbox
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, email, age, anecdote, terms } = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">

          <fieldset>
            <label htmlFor="name">
              Nome:
              <input
                id="name"
                name="name"
                type="text"
                value={ name }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="email"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>

            <SelectInput
              age={ age }
              handleChange={ this.handleChange }
            />
          </fieldset>

          <fieldset>
            <label htmlFor="anecdote">
              <legend>Texto e arquivos</legend>
              Anedota:
              <textarea
                id="anecdote"
                name="anecdote"
                value={ anecdote }
                onClick={ this.handleChange } />
            </label>
            <input
              type="file"
            />
          </fieldset>
          
          <label htmlFor="terms">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              onChange={ this.handleChange }
              value={ terms }
            />
            Concordo com termos e acordos
          </label>

        </form>
      </div>
    );
  }
}

export default App;
