import React, {useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Form,Col,Button,Alert} from 'react-bootstrap'
import './Login.css'
import {useAuth} from '../Context/AuthContext'

export default function Login() {
	const emailRef = useRef();
	const passRef = useRef();

	const {login} = useAuth();
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		try{
			setError('')
			setLoading(true)
			await login(emailRef.current.value, passRef.current.value)
			history.push('/home')
		} catch {
			setError('Failed to sign in')
		}
		setLoading(false)
	}

	return (
		<Form style={{backgroundColor:'#f5f5f5 '}} onSubmit={handleSubmit}>
			<h2 className='text-center mb-4'>Log In</h2>

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
			</Form.Row>

			<Button disabled={loading} type="submit" className='w-100'>Log In</Button>
			<p>Need an account? <Link to='/register'>Click here</Link></p>
			<p>Forgot your password? <Link to='/forgot-password'>Click here</Link></p>

		</Form>
		);
}