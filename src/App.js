import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './routes/NotFound';
import AboutUs from './routes/AboutUs';
import Home from './routes/Home';
import ContactUs from './routes/ContactUs';
import Products from './routes/Products';
import Product from './routes/Product';
// import EmailValidation from './routes/EmailValidation';

function App() {
	/*
	useEffect(() => {
		window.addEventListener('offline', () => dispatch(setMessage('اینترنت شما قطع شده!', 400)));
		window.addEventListener('online', () => dispatch(setMessage('اینترنت شما وصل است!', 203)));
		return () => {
			window.removeEventListener('offline');
			window.removeEventListener('online');
		};
		// eslint-disable-next-line
	}, []);
	*/
  return (
	<div>
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/aboutus" component={AboutUs} />
				<Route exact path="/contactus" component={ContactUs} />
				<Route exact path="/Products" component={Products} />
				<Route exact path="/Products/:productId" component={Product} />
				<Route path="/*" component={NotFound} />
			</Switch>
			<Footer />
		</Router>
	</div>
  );
}

export default App;
