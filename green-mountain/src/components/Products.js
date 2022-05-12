import React , {useState} from 'react';
import Product from './Product';
import data from '../data.json';
import { Carousel } from 'react-responsive-carousel';

function Products(props) {

	const [strains, setStrains] = useState(data);
	console.log(strains)

    return (
			<div id='products'>
					<div>
						{strains.data.map((strain) => {
							return <div key={strain.id}>{strain.name}
							
							</div>;
						})}
					</div>

			</div>
		);
}

export default Products;