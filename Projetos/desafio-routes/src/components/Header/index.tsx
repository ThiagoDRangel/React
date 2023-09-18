import { NavLink } from "react-router-dom";
import homeIcon from '../../assets/homeIcon.svg';
import './styles.css';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="header-content">
          <NavLink to="/home" className={({isActive}) => isActive ? "menu-active" : "menu-item"}>
            Início
          </NavLink>
          <NavLink to="/products" className={({isActive}) => isActive ? "menu-active" : "menu-item"}>
            Produtos
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "menu-active" : "menu-item"}>
            Sobre nós
          </NavLink>
        </div>
        <NavLink to="/home">
          <img src={homeIcon} alt="home" />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
