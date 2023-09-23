import './styles.css';

function Header() {
  return (
    <header>
      <h1 className="header-site-name">DSFilter</h1>
      <section className="header-quantity">
        <div className="header-text">1</div>
        <div className="header-text">produto(s)</div>
      </section>
    </header>
  );
}

export default Header;
