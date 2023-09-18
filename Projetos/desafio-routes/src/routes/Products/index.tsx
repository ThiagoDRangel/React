import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import BodyProducts from "../../components/BodyProducts";

function Products() {
  return (
    <>
      <Header />
      <BodyProducts />
      <Outlet />
    </>
  );
}

export default Products;
