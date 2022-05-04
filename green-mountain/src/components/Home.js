import React from 'react';
import { LoremIpsum,  } from 'react-lorem-ipsum';

function Home(props) {
    return (
			<div id='home'>
				Home/high level
				<LoremIpsum p={2} />
			</div>
		);
}

export default Home;