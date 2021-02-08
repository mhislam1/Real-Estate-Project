import React from 'react';
import './Login.css'

export default function Login(){
return(
    <>
	<div className='logDiv' >
        <div class="form-app">
			<h1>Log In To Your Account </h1>
				
			Username:
			<input type="text" class="form-text" placeholder="Enter Username" name="username" required/><br />
				
			Password:
			<input type="password" class="form-text" minlength="8" placeholder="Enter Password" name="password" required/><br />
				
			<input type="submit" value="Sign in" class="reg-button" id="button1" /> <br />
        </div>
	</div>
    </>
)
}

