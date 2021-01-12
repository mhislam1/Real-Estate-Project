import React, { Component } from 'react'
import NavbarMenu from './views/NavbarMenu';
import Register from './views/Register';
import Home from './views/Home';
import Login from './views/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styling/style.css';

class App extends Component {
	render(){
		return (
			<Router>
				<NavbarMenu />
				<Route path='/' component={Home} />
				<Route path='/register' component={Register} />
				<Route path='/login' component={Login} />
			</Router>
		)
	}
}

export default App;
