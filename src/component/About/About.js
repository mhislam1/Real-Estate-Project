import React from 'react'
import './About.css'
import propic from '../../Image/faceless.png'
import {Container,Row,Col} from 'react-bootstrap'

export default function About(){
    return(
        <>
        <div className='about-div'>
                <h1>About Us</h1>
            <Container>
            <Row>
            <h2 style={{textAlign:"center", width:"100%"}}>Meet the Developers!</h2>
            </Row>
					<Row className="Devs">
						<Col className='square'>
                            <img src={propic} className='pic'/>
                            <h2>Tajdidul</h2>
                            <p className='ptext'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tellus sed velit efficitur eleifend et et tellus. 
                            Integer euismod quam id lectus ultricies, in laoreet turpis tristique. Vivamus aliquet nisl vitae purus malesuada aliquet. 
                            </p>
						</Col>
                        <Col className='square'>
                            <img src={propic} className='pic'/>
                            <h2>Abdur</h2>
                            <p className='ptext'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tellus sed velit efficitur eleifend et et tellus. 
                            Integer euismod quam id lectus ultricies, in laoreet turpis tristique. Vivamus aliquet nisl vitae purus malesuada aliquet. 
                            </p>
						</Col>
					</Row>
			</Container>
        </div>
        </>
    )
}