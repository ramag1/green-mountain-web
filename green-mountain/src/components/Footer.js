import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa';

function Footer(props) {
	return (
		<div className='footer__div' id='footer'>
			<ul className='footer_info' id='info'>
				<li>
					<FaMapMarkerAlt />
					{/* <i className='fa-solid fa-location-dot'></i> */}
					Rutland County, Vermont
				</li>
				<li>
					<FaMobileAlt />
					{/* <i className='fa-solid fa-mobile-screen-button'></i> */}
					650-339-3768
				</li>
				<li>
					<FaEnvelope />
					greenmountainganjaguys@gmail.com
				</li>
			</ul>
		</div>
	);
}

export default Footer;
