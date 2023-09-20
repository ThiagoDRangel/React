import { useState } from 'react';
import './styles.css';
import User from '../User';
import BadRequest from '../BadRequest';
import { URL_BASE } from '../../utils/system';

function SearchBar() {
  const [userValue, setUserValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [show, setShow] = useState(false);

  async function buttonHandle() {
    try {
      const response = await fetch(`${URL_BASE}${inputValue}`);

      if (!response.ok) {
        setUserValue(null);
        return;
      }

      const data = await response.json();
      setUserValue(data);
      setShow(true);
    } catch (error) {
      setUserValue(null);
      setShow(true);
    }
  }

  function inputHandle(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <div className="container-initial-search">
        <p className="text-content">Encontre um perfil Github</p>
        <input
          className="initial-search-input"
          onChange={inputHandle}
          placeholder="Usuário Github"
          type="text"
          />
          <button onClick={buttonHandle}>
            Encontrar
          </button>
      </div>
      <div>
      {show && (userValue ? <User data={userValue} /> : <BadRequest />)}
      </div>
    </>
  );
}

export default SearchBar;
