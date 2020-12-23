import { render } from '@testing-library/react';
import React from 'react';
import logo from './styling/Image/house.jpg';
import background1 from './styling/Image/background1.jpeg';

export default function Navbar() {
	return (
		<>
		<header>
			<div class="container">
				<a href="/"><img src={logo} alt="logo" /></a>
			</div>

			<nav class='nav'>
				<li><a class='nav-link' href='/'>Home</a></li>
				<li><a class='nav-link' href='register'>Register</a></li>
				<li><a class='nav-link' href='login'>Login</a></li>
				<li><a class='nav-link' href='about'>About</a></li>
				<li><a class='nav-link' href='contact'>Contact</a></li>
			</nav>
		</header>
		<div class ='background-div'>
			<img src={background1} class='background' alt="background1" />
		</div>
		</>
	);
}
