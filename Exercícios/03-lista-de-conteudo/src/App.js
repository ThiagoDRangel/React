import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render () {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
      
    );
  }
}

export default App;
