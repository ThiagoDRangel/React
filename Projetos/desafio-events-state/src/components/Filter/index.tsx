import './styles.css';

function Filter() {
  return (
    <section className="filter-container">
      <input className="filter-input" type="text" placeholder="Preço mínimo"/>
      <input className="filter-input" type="text" placeholder="Preço máximo"/>
      <button className="filter-btn">Filtrar</button>
    </section>
  );
}

export default Filter;
