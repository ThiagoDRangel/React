import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import ShoppingCard from '../pages/ShoppingCard';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact path="/"
            component={ ProductList }
          />
          <Route
            exact path="/shopping"
            component={ ShoppingCard }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
