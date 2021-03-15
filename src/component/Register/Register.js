import React, {useRef, useState} from 'react';
import landing from '../../Image/background2.jpg';
import {Link, useHistory} from 'react-router-dom';
import {Form,Col,Button,Alert} from 'react-bootstrap'
import './Register.css'
import {useAuth} from '../Context/AuthContext'

export default function Register() {
	const emailRef = useRef();
	const passRef = useRef();
	const passConRef = useRef();
	const fName = useRef();
	const mName = useRef();
	const lName = useRef();

	const {signup} = useAuth();
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	async function handleSubmit(e) {
		e.preventDefault();

		if(passRef.current.value !== passConRef.current.value){
			return setError('Passwords do not match')
		}

		try{
			setError('')
			setLoading(true)
			await signup(emailRef.current.value, passRef.current.value)
			history.push('/home')
		} catch {
			setError('Failed to make an account')
		}
		setLoading(false)
	}

	return (
		<Form style={{backgroundColor:'#f5f5f5 '}} onSubmit={handleSubmit}>
			<h2 className='text-center mb-4'>Sign Up</h2>

			{error && <Alert variant='danger'>{error}</Alert>}
			<Form.Row>
				<Form.Group as={Col} controlId="formGridEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} controlId="formGridPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" ref={passRef}/>
				</Form.Group>

				<Form.Group as={Col} controlId="confirmPassword">
				<Form.Label>Re-enter Password</Form.Label>
				<Form.Control type="password" placeholder="Password" ref={passConRef}/>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} controlId="firstName">
				<Form.Label>First Name</Form.Label>
				<Form.Control ref={fName}/>
				</Form.Group>

				<Form.Group as={Col} controlId="middleName">
				<Form.Label>Middle Name</Form.Label>
				<Form.Control ref={mName}/>
				</Form.Group>

				<Form.Group as={Col} controlId="lastName">
				<Form.Label>Last Name</Form.Label>
				<Form.Control ref={lName}/>
				</Form.Group>
			</Form.Row>

			<Button disabled={loading} type="submit">Sign Up </Button>
			<Button as="input" type="reset" value="Reset" variant='danger'/>
			<p>Already have an account? <Link to='/login'>Click here</Link></p>

		</Form>
		);
}