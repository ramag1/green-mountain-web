import {Routes, Route} from 'react-router-dom'
import HeaderNav from './components/HeaderNav';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Footer from './components/Footer';
import Product from './components/Product';

import './App.css';

import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import Contact from './components/Contact';

function App() {
  return (
		<div className='app__container'>
			<HeaderNav />
			<Home />
			<AboutUs/>
			<Products />
			<Contact/>
			<Footer />

			<Routes>
				<Route path='/#products/:id' element={<Product />}></Route>
			</Routes>
		</div>
	);
}

export default App;
