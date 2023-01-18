import { shape, string } from 'prop-types';
import React, { Component } from 'react';

class AddressForm extends Component {
  render() {
    const { formState: {
      name, email, cpf, endereco,
      cidade, estado, tipoMoradia,
      resumo, cargo, desc,
    },
    } = this.props;

    return (
      <div className="div-dados">
        <h2>Dados enviados</h2>
        <div className="container-dados">
          <div>
            <h3>Pessoal</h3>
            <div>
              Name:
              {' '}
              <span>
                { name }
              </span>
            </div>
            <div>
              Email:
              { ' ' }
              <span>
                { email }
              </span>
            </div>
            <div>
              CPF:
              { ' ' }
              <span>
                { cpf }
              </span>
            </div>
            <div>
              Endereço:
              { ' ' }
              <span>
                { endereco }
              </span>
            </div>
            <div>
              Cidade:
              { ' ' }
              <span>
                { cidade }
              </span>
            </div>
            <div>
              Estado:
              { ' ' }
              <span>
                { estado }
              </span>
            </div>
            <div>
              Tipo de residência:
              { ' ' }
              <span>
                { tipoMoradia }
              </span>
            </div>
          </div>
          <div>
            <h3>Profissional</h3>
            <div>
              Resumo do currículo:
              { ' ' }
              <span>
                { resumo }
              </span>
            </div>
            <div>
              Cargo:
              { ' ' }
              <span>
                { cargo }
              </span>
            </div>
            <div>
              Descrição do cargo:
              { ' ' }
              <span>
                { desc }
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddressForm.propTypes = {
  formState: shape({
    name: string,
    email: string,
    cpf: string,
    endereco: string,
    cidade: string,
    estado: string,
    tipoMoradia: string,
    resumo: string,
    cargo: string,
    desc: string,
  }).isRequired,
};

export default AddressForm;
