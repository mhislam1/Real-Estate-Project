import React, {Component} from 'react';
import logo from '../styling/Image/house.jpg';
import landing from '../styling/Image/landing.jpeg';
import background from '../styling/Image/background1.jpeg'
import {Navbar, Nav} from 'react-bootstrap';


class NavbarMenu extends Component {
	render() {
		return(
			<body>
				<header>
			  <Navbar expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="#home">
				<img
					src= '../styling/Image/house.jpg'
					width="30"
					height="30"
					className="d-inline-block align-top"
					// alt="React Bootstrap logo"
				/>
				Fillow
				</Navbar.Brand>
				<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Navbar>
		</header>
		<div class ='background-div'>
			<img src={landing} class='background' alt="comp" />
		</div>
		</body>

/*
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
*/
		)
	}
}


export default NavbarMenu;