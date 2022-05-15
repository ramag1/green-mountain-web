import React , {useState} from 'react';
import Product from './Product';
import './Products.css'

import { Carousel } from 'react-responsive-carousel';

function Products(props) {

    return (
		<div id='products'>
			<div className='products__div'>
				<Product />
			</div>
		</div>
	);
}

export default Products;