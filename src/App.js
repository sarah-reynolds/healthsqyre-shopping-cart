import React from 'react';
import Products from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';

const StyledContainer = styled(Container)({
  backgroundColor: '#f7f8fc',
  paddingBottom: '20px',
  height: '100vh'
});

const App = () => {  
  return (
    <Router>
      <StyledContainer>
        <Header />
      <Route exact path="/" component={Products} />
      <Route exact path="/cart" component={Cart} />
      </StyledContainer>
      
    </Router>
  );
}

export default App;
