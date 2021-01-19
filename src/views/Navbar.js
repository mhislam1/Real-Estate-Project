import React from 'react';
import logo from '../styling/Image/house.jpg';
import { Navbar, Nav} from 'react-bootstrap';

export default function NavigationBar() {
	return (
		<>
		<body >
		<header>
			

			  <Navbar expand="lg" bg="dark" variant="dark" className="navbar" id="navbar-div">
				
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
						<Navbar.Brand href="/">				
						
						<img src= {logo} width="30" height="30" className="d-inline-block align-top"/>
						
						Fillow
						
						</Navbar.Brand>
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#contact">Contact Us</Nav.Link>
					<Nav.Link href="Login">Sign In</Nav.Link>
					<Nav.Link href="Register">Register</Nav.Link>
				</Nav>
			</Navbar>
		</header>
		</body>
		</>
	);
}