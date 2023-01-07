import './App.css';

function App() {
  const nome = 'World!';
  const classe = 'Hello';
  const element = <h1 className={classe}>{classe}, {nome}</h1>;
  return (
    <div>{element}</div>
  );
}

export default App;
