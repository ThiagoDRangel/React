import Filter from "../Filter";
import Header from "../Header";
import Listing from "../Listing";
import { findByPrice } from "../../services/product-service";
import IProducts from "../../interfaces/IProducts";
import { useState, useEffect, useContext } from "react";
import { ContextProductCount } from '../../utils/context-products'
import './styles.css';

function ListingBody() {
  const [listProduct, setListProduct] = useState<IProducts[]>([]);
  const { setContextProductCount } = useContext(ContextProductCount);

  useEffect(() => {
    const products = findByPrice(0, Number.MAX_VALUE);
    setListProduct(products);
    setContextProductCount(products.length);
  }, [setContextProductCount]);

  function onFilter(min: number, max: number) {
    const minPrice = min <= 0 ? 0 : min;
    const maxPrice = max <= 0 ? Number.MAX_VALUE : max;
    const products = findByPrice(minPrice, maxPrice);
    setListProduct(products);
    setContextProductCount(products.length);
  }

  return (
    <>
      <Header />
      <main className="listing-body">
        <Filter
          onFilter={onFilter}
        />
        <Listing
          filterProducts={listProduct}
        />
      </main>
    </>
  );
}

export default ListingBody;
