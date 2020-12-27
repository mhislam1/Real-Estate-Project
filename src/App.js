import React, { Component } from 'react';
import Navbar from './views/Navbar';
import Register from './views/Register';
import Login from './views/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styling/style.css';
import { Map, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
	width: '100%',
	height: '100%'
};

export class MapContainer extends Component {
	render() {
		return(
			<Map
			google={this.props.google}
			zoom= {14}
			style= {mapStyles}
			initialCenter = {
				{
					lat: -10,
					lng: 20
				}
			}
		/>
	);
}
}
	

		
function App() {
	return (
		<Router>
			<div className="App">
			<Navbar />
			<Route path='/register' component={Register} />;
			<Route path='/login' component={Login} />;
			</div>
		</Router>
		
	);
}

// export default App;
export default GoogleApiWrapper({
	apiKey: 'AIzaSyDLiQIfQF-jxb4bbMMEC2TX9Xn-zLKLSYM'
})(MapContainer);