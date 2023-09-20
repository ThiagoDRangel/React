import gitIcon from '../../assets/gitIcon.svg';
import './styles.css';

function Header() {
  return (
    <header>
      <h2 className="header-text">Github API</h2>
      <img
        alt=""
        className="header-img"
        src={gitIcon}
      />
    </header>
  );
}

export default Header;
