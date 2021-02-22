import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { getProducts } from '../services';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { styled } from '@material-ui/core/styles';

const ProductPaper = styled(Paper)({
	padding: '10px'
});

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	const fetchProducts = async () => {
		const response = await getProducts();
		setProducts(response)
		setIsLoading(false)
	};

  useEffect(() => {
		fetchProducts()
	}, [])	
	
	return (
		<Container>
			<ProductPaper elevation={3} >
				{isLoading && <Typography>Loading...</Typography>} 
				<Typography variant="h4">List of Products</Typography>
				<Divider/>
				{
					products.map((product, index) => <ProductItem product={product} key={index}/>)
				}
				<Button variant="contained" color="primary" href="/cart">View Cart</Button>
			</ProductPaper>
		</Container>
	);
}

export default ProductList;
