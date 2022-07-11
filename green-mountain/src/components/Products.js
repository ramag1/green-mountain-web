import React , {useState} from 'react';
import Product from './Product';
import './Products.css'


function Products(props) {

    return (
		<div className='products__div'>
			<div className='products__p'>
				<Product />
			</div>
		</div>
	);
}

export default Products;