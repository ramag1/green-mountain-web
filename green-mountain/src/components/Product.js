import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import data from '../data.json'

function Product(props) {

    const [strains, setStrains] = useState(null)

    return (
			<div>
				{/* <Carousel>
					<div>
						{data.map((strain) => {
							return <div key={strain.id}>{strain.name}</div>;
						})}
					</div>
				</Carousel> */}
			</div>
		);
}

export default Product;