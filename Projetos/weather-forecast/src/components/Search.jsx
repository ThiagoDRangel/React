import React, { Component } from 'react';

class Search extends Component {

  searchInput = () => {
    alert('eu');
  }
  render() {
    return (
      <div className='search'>
        <h2>Previsão do tempo</h2>
        <input
          onKeyUp={ this.searchInput }
          type="text"
          name="search-input"
          placeholder='Digite a cidade...'
        />
      </div>
    );
  }
}

export default Search;
