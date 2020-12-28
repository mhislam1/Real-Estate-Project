import { render } from '@testing-library/react';
import React, {Component} from 'react';
import logo from '../styling/Image/house.jpg';
import landing from '../styling/Image/landing.jpeg';
import background from '../styling/Image/background1.jpeg'


class Navbar extends Component {
	render() {
		return(
			<header>
				<div class="container">
					<a href="/"><img src={logo} alt="logo" /></a>
				</div>

				<p class='Fillow'><a href='/'>Fillow</a></p>

				<nav class='nav'>
					<li><a class='nav-link' href='/'>Home</a></li>
					<li><a class='nav-link' href='register'>Register</a></li>
					<li><a class='nav-link' href='login'>Login</a></li>
					<li><a class='nav-link' href='about'>About</a></li>
					<li><a class='nav-link' href='contact'>Contact</a></li>
				</nav>
			</header>
		)
	}
}


export default Navbar;