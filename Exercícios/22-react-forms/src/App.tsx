import { ChangeEvent, FormEvent, useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
}

function App() {

  const [fullName, setFullName] = useState<string>();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: ''
  });

function handleInputChange(event: ChangeEvent<HTMLInputElement>) {

  const { name, value } = event.target;
  setFormData({...formData, [name]: value });
}

function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setFullName(formData.firstName + " " + formData.lastName);
}

  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <div>
        <input
          name="firstName"
          value={formData.firstName}
          type="text" 
          placeholder="Digite o seu nome"
          onChange={handleInputChange}
          />
      </div>
      <div>
        <input
          name="lastName"
          value={formData.lastName}
          type="text" 
          placeholder="Digite seu sobrenome"
          onChange={handleInputChange}
          />
      </div>
      <button type="submit">Mostrar nome completo</button>
    </form>
    <h2>{fullName}</h2>
    </>
  );
}

export default App
