import { useNavigate } from 'react-router-dom';
import './styles.css';

function BodyHome() {

  const navigate = useNavigate();

  function buttonNavigate() {
    navigate("/search")
  }

  return (
    <section>
      <h1>Desafio Github API</h1>
      <h3>DevSuperior - Escola de programação</h3>
      <button
        className="button-start"
        onClick={buttonNavigate}
      >
        Começar
      </button>
    </section>
  );
}

export default BodyHome;
