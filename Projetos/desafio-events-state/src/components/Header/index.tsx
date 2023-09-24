import { ContextProductCount } from '../../utils/context-products';
import { useContext } from "react";
import './styles.css';

function Header() {

  const { contextProductCount } = useContext(ContextProductCount);

  return (
    <header>
      <h1 className="header-site-name">DSFilter</h1>
      <section className="header-quantity">
        {
          contextProductCount > 0 &&
          <div className="header-text">{contextProductCount}</div>
        }
        <div className="header-text">produto(s)</div>
      </section>
    </header>
  );
}

export default Header;
