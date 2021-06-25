import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = props => {
	const { products, addItem } = useContext(ProductContext);
	return (
		<div className="products-container">
			{
			products && products.map(product => {
				console.log(product);
				return<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			})}
		</div>
	);
};

export default Products;
