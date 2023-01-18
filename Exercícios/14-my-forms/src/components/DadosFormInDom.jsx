import { func, shape, string } from 'prop-types';
import React, { Component } from 'react';

class DadosFormInDom extends Component {
  state = {
    alertWasDisplayed: false,
  };

  onMouseEnterHandler = () => {
    const { alertWasDisplayed } = this.state;
    if (!alertWasDisplayed) {
      global.alert('Preencha com cuidado esta informação.');
      this.setState({ alertWasDisplayed: true });
    }
  };

  render() {
    const {
      onChange,
      formState: { resumo, cargo, desc },
    } = this.props;
    return (
      <fieldset className="form-data-pessoal">
        <legend>Curriculo</legend>
        <label htmlFor="resumo">
          Resumo do currículo
          <textarea
            name="resumo"
            id="resumo"
            maxLength="1000"
            cols="50"
            required
            rows="6"
            onChange={ onChange }
            value={ resumo }
          />
        </label>
        <label htmlFor="cargo">
          Cargo
          <input
            type="text"
            name="cargo"
            id="cargo"
            maxLength="40"
            required
            onChange={ onChange }
            value={ cargo }
            onMouseEnter={ this.onMouseEnterHandler }
          />
        </label>
        <label htmlFor="desc">
          Descrição do cargo
          <textarea
            name="desc"
            id="desc"
            maxLength="500"
            cols="50"
            rows="6"
            required
            onChange={ onChange }
            value={ desc }
          />
        </label>
      </fieldset>
    );
  }
}

DadosFormInDom.propTypes = {
  onChange: func.isRequired,
  formState: shape({
    resumo: string,
    cargo: string,
    desc: string,
  }).isRequired,
};

export default DadosFormInDom;