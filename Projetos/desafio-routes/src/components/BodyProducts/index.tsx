import { NavLink } from "react-router-dom";
import './styles.css';

function BodyProducts() {
  return (
    <div className="navbar-products">
      <NavLink to="/products/computers" className={({isActive}) => isActive ? "menu-active-cat nav-item" : "nav-item"}>
        Computadores
      </NavLink>
      <NavLink to="/products/eletronics" className={({isActive}) => isActive ? "menu-active-cat nav-item" : "nav-item"}>
        Eletrônicos
      </NavLink>
      <NavLink to="/products/books" className={({isActive}) => isActive ? "menu-active-cat nav-item" : "nav-item"}>
        Livros
      </NavLink>
    </div>
  );
}

export default BodyProducts;
