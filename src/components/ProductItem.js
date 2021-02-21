import React, { useState } from 'react';
import parse from 'html-react-parser';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

import { styled } from '@material-ui/core/styles';

const ProductCard = styled(Card)({
	margin: '10px',
	padding: '10px'
});

const AddToCartButton = styled(Button)({
	margin: '5px 10px 5px 0'
})

const ProductItem = props => {
	const { product } = props;
	const [quantity, setQuantity] = useState(1);

	const handleInputChange = event => setQuantity(event.target.value)

	const addToCart = () => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = product.id.toString();
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] + parseInt(quantity);
		cart[id] = qty
		localStorage.setItem('cart', JSON.stringify(cart));
	}
		
		return (
			<ProductCard>
				<>
					<Typography variant="h5" color="primary">{product.name}</Typography>
					<Typography>{parse(product.description)}</Typography>
					<Typography variant="h6">Price: ${product.price}</Typography>
					<Typography>In stock: {JSON.stringify(product.in_stock)}</Typography>
					
				{ product.in_stock ?
					<>
						<AddToCartButton variant="contained" color="secondary" onClick={addToCart}>Add to cart</AddToCartButton>
						<Input type="number" value={quantity} name="quantity" onChange={handleInputChange} />
					</> : 
					<Typography>Product is out of stock</Typography>
				}

				</>
			</ProductCard>
		)
}

export default ProductItem