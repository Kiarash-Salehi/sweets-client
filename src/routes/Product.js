import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Product.css';

const Product = () => {
	const { productId } = useParams();
	return (
		<div className="Product">
			<h1>Product {productId}</h1>
		</div>
	);
};

export default Product;