import React from 'react';
import AddressForm from './components/AddressForm';
import PersonalForm from './components/PersonalForm';
import handleValue from './utils/handleValue';
import ProfessionalForm from './components/ProfessionalForm';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = { ... };
  }

  handleChange({ target }) { ... }

  handleBlur({ target }) {
    const { name, value } = target;

    if (name === 'city' && /^\d/.test(value)) {
      this.setState({
        [name]: '',
      });
    }
  }

  render() {
    return (
      <form>
        <PersonalForm onChange={ this.handleChange } formState={ this.state } />
        <AddressForm
          onChange={ this.handleChange }
          formState={ this.state }
          onBlur={ this.handleBlur }
        />
        <ProfessionalForm onChange={ this.handleChange } formState={ this.state } />

      </form>
    );
  }
}

export default App;