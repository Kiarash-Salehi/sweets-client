import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductSlider.css';

const ProductSlider = ({ name, price, id, img }) => {
	return (
		<div className="ProductSlider">
			<img className="ProductSlider__img" src={require(`../images/${img}`)} alt="Product"/>
			<div className="ProductSlider__info">
				<h2>{name}</h2>
				<h3>{price}</h3>
			</div>
			<div className="ProductSlider__btns">
				<Link to={`products/${id}`}><span><i className="far fa-eye"></i></span></Link>
				<Link to="/"><span><i className="far fa-heart"></i></span></Link>
				{/*<Link to="/"><span><i className="fas fa-heart"></i></span></Link>*/}
				<Link to="/"><span><i className="fas fa-cart-plus"></i></span></Link>
				{/*<Link to="/"><span><i className="fas fa-shopping-cart"></i></span></Link>*/}
			</div>
		</div>
	);
};

export default ProductSlider;