import {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import {NavLink} from 'react-router-dom';
import './HeaderNav.css'


function HeaderNav(props) {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });
    let navbarClasses = ['navbar'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    return (
        <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
            {/* <img src={logo}></img> */}
            <h1>Green Mountain Ganga Guys</h1>
			<nav>
				<ul>
				<AnchorLink href='#home'>Home</AnchorLink>
				<AnchorLink href='#about'>About Us</AnchorLink>
				<AnchorLink href='#products'>Our Products</AnchorLink>
				<AnchorLink href='#contact'>Contact Us</AnchorLink>
				</ul> 
			</nav>
        </header>
	);
}

export default HeaderNav;