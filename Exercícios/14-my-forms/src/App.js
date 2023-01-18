import React, { Component } from 'react';
import { validateEmail, validateNameEnd } from './utils/validateFilds';
import DadosFormInDom from './components/DadosFormInDom';
import ProfessionalForm from './components/ProfessionalForm';
import PersonalForm from './components/PersonalForm';

const indexStates = {
  name: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: 'Acre',
  tipoMoradia: 'Casa',
  resumo: '',
  cargo: '',
  desc: '',
  displayData: false,
  emailError: '',
};

class App extends Component {
  state = {
    ...indexStates,
  };

  handleChange = ({ target: { value, name } }) => {
    const isValid = validateNameEnd(name, value);
    const isEmailValid = validateEmail(name, value);

    this.setState((prevState) => ({
      ...prevState,
      [name]: isValid,
      [`${name}Error`]: isEmailValid,
    }));
  };

  handleBlur = ({ target: { value, name } }) => {
    if (name === 'cidade' && /^\d/.test(value)) {
      this.setState({
        [name]: '',
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ displayData: true });
  };

  handleClear = () => {
    this.setState({ ...indexStates });
  };

  render() {
    const { displayData } = this.state;
    return (
      <div className="container">
        <h1>Formulario de cadastro</h1>
        <form onSubmit={ this.handleSubmit }>
          <PersonalForm
            onChange={ this.handleChange }
            formState={ this.state }
          />
          <ProfessionalForm
            onChange={ this.handleChange }
            formState={ this.state }
            onBlur={ this.handleBlur }
          />
          <DadosFormInDom
            onChange={ this.handleChange }
            formState={ this.state }
          />
          <div className="btns">
            <button type="submit" className="btn-enviar">Enviar</button>
            <button
              type="reset"
              onClick={ this.handleClear }
              className="btn-enviar"
            >
              Limpar
            </button>
          </div>
          { displayData && <DadosFormInDom formState={ this.state } /> }
        </form>
      </div>
    );
  }
}

export default App;