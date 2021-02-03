import React from 'react';
import './Contact.css';
import backgroundImage from '../../Image/background4.jpg'

export default function Contact(){
    return(
        <>
            <div class='contact-div' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1>Contact Us</h1>
               
                Your Name
                <input type='text' class='contact-text' name='name' required/>

                Your Email Address
                <input type='email' class='contact-text' name='email' required/> <br/>

                Your Message
                <input type='text' class='contact-message' placeholder='Text' name='message' required/>                
            </div>
        </>
    );
}