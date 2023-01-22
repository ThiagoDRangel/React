import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <h2 className='App'>
        <Search />
      </h2>
    );
  }
}

export default App;
