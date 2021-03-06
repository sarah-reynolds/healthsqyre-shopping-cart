import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';

const HeaderButton = styled(Button)({
  margin: '10px 20px 10px 0',
});

const HeaderH3 = styled(Typography)({
  padding: '20px 0 10px 0'
})

const Header = () => {  
  return (
    <Container>
      <HeaderH3 variant="h3">Shopping Cart App</HeaderH3>
      <HeaderButton color="primary" size="large" href="/">Products</HeaderButton>
      <HeaderButton color="primary" size="large" href="/cart">Cart</HeaderButton>
    </Container>
  );
}

export default Header;