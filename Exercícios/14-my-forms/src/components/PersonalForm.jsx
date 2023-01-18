import { func, shape, string } from 'prop-types';
import React, { Component } from 'react';

class PersonalForm extends Component {
  render() {
    const { onChange,
      formState: { name, cpf, email, emailError },
    } = this.props;

    return (
      <fieldset className="form-data-pessoal">
        <legend>Dados Pessoais</legend>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            required
            maxLength="40"
            placeholder="Digite seu nome"
            value={ name }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            maxLength="50"
            required
            placeholder="Digite seu E-mail"
            value={ email }
            onChange={ onChange }
          />
        </label>
        <span>{emailError}</span>
        <label htmlFor="cpf">
          CPF
          <input
            type="text"
            name="cpf"
            id="cpf"
            maxLength="11"
            required
            placeholder="Digite seu cpf"
            value={ cpf }
            onChange={ onChange }
          />
        </label>
      </fieldset>
    );
  }
}

PersonalForm.propTypes = {
  onChange: func.isRequired,
  formState: shape({
    name: string,
    email: string,
    cpf: string,
  }).isRequired,
};

export default PersonalForm
