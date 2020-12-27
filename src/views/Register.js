import React from 'react';

export default function Navbar() {
	return (
		<>
            <div class="form-app">
				<h1>Register</h1>

				First Name:
				<input type="text" class="form-text" placeholder="Enter First Name" name="first" required/><br />
				
				Last Name:
				<input type="text" class="form-text" placeholder="Enter Last Name" name="last" required/><br />
				
				Middle Name:
				<input type="text" class="form-text" placeholder="Enter Middle Name" name="middle"/><br />
				
				Username:
				<input type="text" class="form-text" placeholder="Enter Username" name="username" required/><br />
				
				Password:
				<input type="password" class="form-text" minlength="8" placeholder="Enter Password" name="password" required/><br />

				Re-enter Password:
				<input type="password" class="form-text" minlength="8" placeholder="Enter Password" name="password2" required/><br />				

				Email:
				<input type="email" class="form-text" placeholder="Enter Email" name="email" required/><br />
				
				Gender:<br />
				<input type="radio" class="form-text" name="gender" value="M" required/>Male<br />
				<input type="radio" class="form-text" name="gender" value="F" required/>Female<br />
				<input type="radio" class="form-text" name="gender" value="O" required/>Other<br />
				
				DOB: <input type="date" class="form-text" name="dob" required /><br />
				<input type="submit" value="Register" class="reg-button" id="button1" onmouseover="myButton()" />
				<input type="Reset" class="reset-button" id="button2" onmouseover="myButton()"/><br />
			</div>
		</>
	);
}
