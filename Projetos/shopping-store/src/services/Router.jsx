import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import ShoppingCard from '../pages/ShoppingCard';
import Details from '../pages/Details';

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
          <Route
            exact path="/details/:id"
            component={ Details }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
