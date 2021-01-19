import React from 'react'
import NavigationBar from './views/Navbar';
import Register from './views/Register';
import Home from './views/Home';
import Login from './views/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styling/style.css';

export default function App() {
	return(
		<>
		<Router>
			<NavigationBar />
			<Route path='/' component={Home} />
			<Route path='/register' component={Register} />
			<Route path='/login' component={Login} />
		</Router>
		</>
	);
}