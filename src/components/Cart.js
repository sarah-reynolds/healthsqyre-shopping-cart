import React, { useState, useEffect } from 'react';
import { getCartProducts } from '../services';
import CartItem from './CartItem';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';

const StyledContainer = styled(Container)({
  height: '100vh'
});

const StyledPaper = styled(Paper)({
	padding: '10px'
});

const ClearCartButton = styled(Button)({
	margin: '10px 0'
})

const Cart = () => {
	const [cartProducts, setCartProducts] = useState([])
	const [total, setTotal] = useState(0)

	const fetchCartProducts = async (cart) => {
		const response = await getCartProducts(cart);
		setCartProducts(response)

		let total = 0
		response.forEach(cartProduct => {
			total += cartProduct.price * cartProduct.qty;
		})
		setTotal(total)
	};

	useEffect(() => {
		let cart = localStorage.getItem('cart');
		if (!cart) return; 
		fetchCartProducts(cart)
	}, [])

	const removeFromCart = product => {
		let products = cartProducts.filter((item) => item.id !== product.id);
		let cart = JSON.parse(localStorage.getItem('cart'));
		delete cart[product.id.toString()];
		localStorage.setItem('cart', JSON.stringify(cart));
		let newTotal = total - (product.qty * product.price) 
		setCartProducts(products)
		setTotal(newTotal);
	}

	const clearCart = () => {
		localStorage.removeItem('cart');
		setCartProducts([])
	}
	return (
		<StyledContainer>
			<StyledPaper>
			<Typography variant="h4">Your Shopping Cart</Typography>
			<Divider/>
				{
					cartProducts.map((product, index) => <CartItem product={product} remove={removeFromCart} key={index}/>)
				}
			<Divider/>
			{ cartProducts.length ? <Typography className="total">Total Amount: ${total}</Typography> : ''}

			{ !cartProducts.length ? <Typography>Your cart is empty.</Typography> : ''}
			<ClearCartButton className="clearCart" variant="contained" onClick={clearCart}>Clear cart</ClearCartButton>

			</StyledPaper>
			
		</StyledContainer>
	);
}

export default Cart
