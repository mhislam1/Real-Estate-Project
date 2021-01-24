import React from 'react';
import {Button} from 'react-bootstrap';

export default function Contact(){
    return(
        <>
            <div class='contact-div'>
                <h1>Contact Us</h1>
               
                Your Name
                <input type='text' class='contact-text' name='name' required/>

                Your Email Address
                <input type='email' class='contact-text' name='email' required/> <br/>

                Your Message
                <input type='text' class='contact-message' placeholder='Text' name='message' required/>
                
                 <Button as="input" type="submit" value="Submit" variant='flat' />{' '}
            </div>
        </>
    );
}