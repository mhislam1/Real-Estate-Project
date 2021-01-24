import React from 'react'
import NavigationBar from './views/Navbar';
import Register from './views/Register';
import Home from './views/Home';
import Login from './views/Login';
import Contact from './views/Contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styling/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
	return(
		<>
		<Router>
			<NavigationBar />
			<Route path='/' component={Home} />
			<Route path='/register' component={Register} />
			<Route path='/login' component={Login} />
			<Route path='/contact' component={Contact} />
		</Router>
		</>
	);
}