import './styles.css'

function SearchBar() {
  return (
    <form className="ct-search-bar">
      <input className="ct-form-control" type="text" placeholder="Digite sua busca" />
      <button className="ct-search-bar-submit" type="submit">Buscar</button>
    </form>
  )
}

export default SearchBar