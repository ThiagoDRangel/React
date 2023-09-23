import IListingProps from '../../interfaces/IListingProps';
import './styles.css';

function Listing({ filterProducts } : IListingProps) {

  return (
    <section className="listing-container">
        {
          filterProducts.map((product) => (
            <div key={product.id} className="card-container">
              <p className="name-content">{product.name}</p>
              <p className="price-content">R$ {product.price.toFixed(2)}</p>
            </div>
          ))}
    </section>
  );
}

export default Listing;
