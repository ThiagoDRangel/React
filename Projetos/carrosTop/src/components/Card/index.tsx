import './styles.css'
import carImg from '../../assets/car.png';
import Button from '../Button';

function Card() {
  return (
    <div className="ct-card">
      <img src={carImg} alt="Carro" />
      <h3>Honda Civic</h3>
      <p>Description:</p>
      <Button />
    </div>
  );
}

export default Card