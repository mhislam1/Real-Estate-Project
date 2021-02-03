import React from 'react'
import './About.css'
import backgroundImage from '../../Image/background5.jpg'

export default function About(){
    return(
        <>
        <div class='contact-div' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div>
                <h1>About Us</h1>
            </div>
        </div>
        </>
    )
}