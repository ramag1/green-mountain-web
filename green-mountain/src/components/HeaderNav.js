import {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import {Link} from 'react-router-dom';
import './HeaderNav.css'


function HeaderNav(props) {


    return (
        <header className='navbar'>
            <h1>Green Mountain Ganga Guys</h1>
			<nav>
				<ul>
				<Link to='/home'>Home</Link>
				<Link to='/about'>About Us</Link>
				<Link to='/products'>Our Products</Link>
				<Link to='/contact'>Contact Us</Link>
				</ul> 
			</nav>
        </header>
	);
}

export default HeaderNav;