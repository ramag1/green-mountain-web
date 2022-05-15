import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import data from '../data.json'

function Product(props) {

    const [strains, setStrains] = useState(data)

    return (

			<div className='product__div'>
				{strains.data.map((strain) => {
					return <div key={strain.id}>{strain.name};
                    <img
                        src={strain.imageKey}
                        alt={strain.name}
                    />;
                    </div>
				})}
			</div>
   
		);
}

export default Product;