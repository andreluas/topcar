import './styles.scss';

function Search() {
  return (
    <div className="search-container">
      <div className="search-content">
        <input type="text" placeholder="Digite sua busca" />
        <button className="search-btn">Buscar</button>
      </div>
    </div>
  );
}

export default Search;
