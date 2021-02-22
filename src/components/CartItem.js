import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { styled } from '@material-ui/core/styles';

const CartCard = styled(Card)({
	margin: '10px',
	padding: '10px'
});

const CartTypography = styled(Typography)({
	margin: '10px'
});

const CartButton = styled(Button)({
	margin: '10px'
});

const CartItem = props => {
	const { product } = props;
	return (
		<CartCard>
			<CartTypography variant="h5">{product.name}</CartTypography>
			<CartTypography variant="h5">Price: ${product.price}</CartTypography>
			<CartTypography>Quantity: {product.qty}</CartTypography>
			<CartButton variant="contained" color="secondary" onClick={() => props.remove(product)}>Remove from cart</CartButton>
		</CartCard>
	)
}

export default CartItem;