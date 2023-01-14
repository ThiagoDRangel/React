import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/ShoppingCart';

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact path="/"
          component={ Home }
        />
        <Route
          exact path="/"
          component={ ShoppingCart }
        />
        <Route
          path="/product/:id"
          component={ Product }
        />
      </Switch>
    </div>
  );
}

export default App;
