import React from 'react';
import Products from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {  
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Products} />
      <Route exact path="/cart" component={Cart} />
    </Router>
  );
}

export default App;
