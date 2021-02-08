import React from 'react';
import landing from '../../Image/background2.jpg';
import {Link} from 'react-router-dom';
import './Register.css'

export default function Navbar() {
	return (
		<>
		<div className='regdiv' style={{backgroundImage: `url(${landing})`}}>
            <div className="form-app">
				<h1>Register</h1>

				<label>First Name:</label>
				<input type="text" className="form-text" placeholder="Enter First Name" name="first" required/><br />
				
				<label>Last Name:</label>
				<input type="text" className="form-text" placeholder="Enter Last Name" name="last" required/><br />
				
				<label>Middle Initial: (Optional)</label>
				<input type="text" className="form-text" placeholder="Enter Middle Name" name="middle"/><br />
				
				<label>Username:</label>
				<input type="text" className="form-text" placeholder="Enter Username" name="username" required/><br />
				
				<label>Password:</label>
				<input type="password" className="form-text" minlength="8" placeholder="Enter Password" name="password" required/><br />

				<label>Re-enter Password:</label>
				<input type="password" className="form-text" minlength="8" placeholder="Enter Password" name="password2" required/><br />				

				<label>Email:</label>
				<input type="email" className="form-text" placeholder="Enter Email" name="email" required/><br />
				
				<label>Gender:</label><br />
				<div className="radio">
				<input type="radio" className="form-text" name="gender" value="M" required/>Male<br />
				<input type="radio" className="form-text" name="gender" value="F" required/>Female<br />
				<input type="radio" className="form-text" name="gender" value="O" required/>Other<br />
				</div>

				<input type="submit" value="Register" className="reg-button" id="button1"  />
				<input type="Reset" className="reset-button" id="button2" /><br />

				<p>Already have an account? <Link to='/login'>Click here</Link></p>
			</div>
		</div>
		</>
	);
}
