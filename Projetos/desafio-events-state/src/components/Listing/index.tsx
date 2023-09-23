import './styles.css';

function Listing() {
  return (
    <section className="listing-container">
      <div className="card-container">
        <p className="name-content">Produto vendido</p>
        <p className="price-content">R$ Preço do produto</p>
      </div>
    </section>
  );
}

export default Listing