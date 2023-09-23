import Filter from "../Filter";
import Header from "../Header";
import Listing from "../Listing";
import { findByPrice } from "../../services/product-service";
import IProducts from "../../interfaces/IProducts";
import { useState, useEffect } from "react";
import './styles.css';

function ListingBody() {
  const [listProduct, setListProduct] = useState<IProducts[]>([]);

  useEffect(() => {
    const products = findByPrice(0, Number.MAX_VALUE);
    setListProduct(products);
  }, []);

  function onSearch(min: number, max: number) {
    const maxPrice = max === 0 ? Number.MAX_VALUE : max;
    const products = findByPrice(min, maxPrice);
    setListProduct(products);
  }

  return (
    <>
      <Header />
      <main className="listing-body">
        <Filter
          onSearch={onSearch}
        />
        <Listing
          filterProducts={listProduct}
        />
      </main>
    </>
  );
}

export default ListingBody;
