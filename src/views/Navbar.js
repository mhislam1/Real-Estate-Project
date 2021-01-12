import { render } from '@testing-library/react';
import React from 'react';
import logo from '../styling/Image/house.jpg';
import landing from '../styling/Image/landing.jpeg';
import background from '../styling/Image/background1.jpeg'
import { Navbar, Nav} from 'react-bootstrap';

export default function NavigationBar() {
	return (
		<>
		<body >
		<header>
			

			  <Navbar expand="lg" bg="dark" variant="dark" className="navbar" id="navbar-div">
				
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
						<Navbar.Brand href="#home">				
						
						<img
							src= {logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
							
						/>
						
						Fillow
						
						</Navbar.Brand>
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#contact">Contact Us</Nav.Link>
					<Nav.Link href="#signin">Sign In</Nav.Link>
				</Nav>
			</Navbar>
		</header>
		{/* <div class ='background-div'>
			<img src={landing} class='background' alt="comp" />
		</div> */}
		</body>
		</>
	);
}
