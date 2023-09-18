import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className="site-name">Meu site</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
