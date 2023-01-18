import { func, shape, string } from 'prop-types';
import React, { Component } from 'react';

import states from '../../countryStates';

class ProfessionalForm extends Component {
  render() {
    const {
      onChange, onBlur,
      formState: { endereco, estado, cidade, tipoMoradia },
    } = this.props;

    return (
      <fieldset className="form-data-pessoal">
        <legend>Endereço</legend>
        <label htmlFor="endereco">
          Endereço
          <input
            type="text"
            name="endereco"
            id="endereco"
            maxLength="200"
            required
            placeholder="Digite seu endereço"
            value={ endereco }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="cidade">
          Cidade
          <input
            type="text"
            name="cidade"
            id="cidade"
            maxLength="28"
            required
            placeholder="Digite sua cidade"
            value={ cidade }
            onChange={ onChange }
            onBlur={ onBlur }
          />
        </label>
        <label htmlFor="estado">
          Estado
          <select
            name="estado"
            id="estado"
            required
            value={ estado }
            onChange={ onChange }
          >
            <option value="">Selecione um estado</option>
            {
              states.map((item) => (
                <option key={ item } value={ item }>{ item }</option>
              ))
            }
          </select>
        </label>
        <div className="radio-btn">
          <label htmlFor="casa">
            <input
              type="radio"
              id="casa"
              name="tipoMoradia"
              value="Casa"
              checked={ tipoMoradia === 'Casa' }
              onChange={ onChange }
            />
            Casa
          </label>
          <label htmlFor="apartamento">
            <input
              type="radio"
              id="apartamento"
              name="tipoMoradia"
              value="Apartamento"
              checked={ tipoMoradia === 'Apartamento' }
              onChange={ onChange }
            />
            Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}

ProfessionalForm.propTypes = {
  onChange: func.isRequired,
  onBlur: func.isRequired,
  formState: shape({
    endereco: string,
    cidade: string,
    tipoMoradia: string,
    estado: string,
  }).isRequired,
};

export default ProfessionalForm;