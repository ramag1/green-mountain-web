import {Routes, Route} from 'react-router-dom'
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeaderNav from './components/HeaderNav';
import Home from './components/Home';
import Product from './components/Product';
import Products from './components/Products';

import './App.css';


function App() {
  return (
		<div className='app__container'>
			<HeaderNav />
			<Home />
			<AboutUs />
			<Products />
			<Contact />
			<Footer />

			<Routes>
				{/* <Route path='/' element={<Home />}></Route> */}
				<Route path='/about' element={<AboutUs />}></Route>
				<Route path='/products' element={<Products />}></Route>
				<Route path='/products/:id' element={<Product />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
			</Routes>
		</div>
	);
}

export default App;
