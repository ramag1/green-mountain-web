import React, {useState} from 'react';

import data from '../data.json'

function Product(props) {

    const [strains, setStrains] = useState(data)

    return (

			<div className='product__div'>
				{strains.data.map((strain) => {
					return <div key={strain.id}>
                        <h2>{strain.name}</h2>
                        <p>{strain.details}</p>
                    </div>
				})}
			</div>
   
		);
}

export default Product;