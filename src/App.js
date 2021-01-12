<<<<<<< Updated upstream
import React from 'react';
import Navbar from './views/Navbar';
=======
import React, {Component} from 'react';
import NavigationBar from './views/Navbar';
>>>>>>> Stashed changes
import Register from './views/Register';
import Login from './views/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styling/style.css';
<<<<<<< Updated upstream

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

export default App;
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './views/Homepage';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
	width: '20',
	height: '50%'
};

export class App extends Component {
	render() {
		return(	
			<Router>			
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
		<div className = "App">
			<NavigationBar/>
			<Route path ='register' component= {Register} />;
			<Route path='/login' component={Login} />;

		</div>
		</Router>


	);
}
}



// function App() {
// 	return (
// 		<Router>
// 			<div className="App">
// 			<NavigationBar />
// 			<Route path='/register' component={Register} />;
// 			<Route path='/login' component={Login} />;
// 			</div>
// 		</Router>

// 	);
// }

// export default App;
export default GoogleApiWrapper({
	apiKey: 'AIzaSyDLiQIfQF-jxb4bbMMEC2TX9Xn-zLKLSYM'
})(App);
>>>>>>> Stashed changes
