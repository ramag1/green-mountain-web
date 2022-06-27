
import {Link} from 'react-router-dom';
import './HeaderNav.css'


function HeaderNav(props) {


    return (
        <header className='navbar'>
			<div className='navbar__logo'></div>
            <h1>GREEN MOUNTAIN GANJA GUYS</h1>
			<nav className='navbar__links'>
				<ul>
				<Link to='/'>Home</Link>
				<Link to='/about'>About Us</Link>
				<Link to='/products'>Our Products</Link>
				<Link to='/contact'>Contact Us</Link>
				</ul> 
			</nav>
        </header>
	);
}

export default HeaderNav;