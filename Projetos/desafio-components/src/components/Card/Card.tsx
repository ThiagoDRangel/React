import carIcon from './../../assets/car.png';
import './styles.css';

function Card() {
  return(
    <main>
      <div className="card-container">
        <img src={carIcon} alt="Carro" />
        <p>Conheça os quatro quantos do mundo.</p>
      </div>
    </main>
  );
}

export default Card;
