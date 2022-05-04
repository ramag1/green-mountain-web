import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Footer from './components/Footer';
import Product from './components/Product';
import Nav from './components/Nav';
import './App.css';

import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

function App() {
  return (
		<div className='app__container'>
			<Header/>
			<Nav />
			<Home/>
			<AboutUs/>
			<Products/>
			<Footer/>

			<Routes>
				<Route path="/#products/:id" element={<Product/>}></Route>
			</Routes>
		</div>
	);
}

export default App;
