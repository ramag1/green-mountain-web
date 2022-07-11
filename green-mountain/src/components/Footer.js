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
					274 Redwood Shores Parkway #504, Redwood City, CA 94065
				</li>
				<li>
					<FaMobileAlt />
					{/* <i className='fa-solid fa-mobile-screen-button'></i> */}
					650-339-3768
				</li>
				<li>
					<FaEnvelope />
					llin@globalpartner.com
				</li>
			</ul>
		</div>
	);
}

export default Footer;
