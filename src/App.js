import React from 'react';
import NavigationBar from './views/Navbar';
import Register from './views/Register';
import Login from './views/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styling/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<div className="App">
			<NavigationBar />
			<Route path='/register' component={Register} />;
			<Route path='/login' component={Login} />;
			</div>
		</Router>
	);
}

export default App;
