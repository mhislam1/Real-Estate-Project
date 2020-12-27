import React from 'react';

function Login(){
return(
    <>
        <div class="form-app">
			<h1>Log In To Your Account </h1>
				
			Username:
			<input type="text" class="form-text" placeholder="Enter Username" name="username" required/><br />
				
			Password:
			<input type="password" class="form-text" minlength="8" placeholder="Enter Password" name="password" required/><br />
				
			<input type="submit" value="Sign in" class="reg-button" id="button1" onmouseover="myButton()"/> <br />
        </div>
    </>
)
}

export default Login;