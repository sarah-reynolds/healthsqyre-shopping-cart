import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const getProducts = () => {
	return axios.get(`${BASE_URL}/api/products`)
		.then(response => response.data);
}

export const getCartProducts = cart =>{
	return axios.post(`${BASE_URL}/api/products`, {cart})
		.then(response => response.data);
}
