import React from 'react';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';

function AboutUs(props) {
    return (
			<div id='about'>
				About us
				<LoremIpsum p={4} />
			</div>
		);
}

export default AboutUs;