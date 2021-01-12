import landing from '../styling/Image/landing.jpeg';
import background from '../styling/Image/background1.jpeg'
import { render } from '@testing-library/react';
import React from 'react';

export default function Homepage() {
    return (
        <>
        <body>
        <div class ='background-div'>
			<img src={landing} class='background' alt="comp" />
		</div>
        </body>
        </>
    );
} 