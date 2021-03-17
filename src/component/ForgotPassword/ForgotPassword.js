import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {Form,Col,Button,Alert} from 'react-bootstrap'
import {useAuth} from '../Context/AuthContext'

export default function ForgotPassword() {
	const emailRef = useRef();

	const {resetPassword} = useAuth();
	const [error, setError] = useState('')
    const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(false)

	async function handleSubmit(e) {
		e.preventDefault();

		try{
            setMessage('')
			setError('')
			setLoading(true)
			await resetPassword(emailRef.current.value)
			setMessage('Check your email to change your password')
		} catch {
			setError('Failed to reset Password')
		}
		setLoading(false)
	}

	return (
		<Form style={{backgroundColor:'#f5f5f5 '}} onSubmit={handleSubmit}>
			<h2 className='text-center mb-4'>Password Reset</h2>

			{error && <Alert variant='danger'>{error}</Alert>}
			{message && <Alert variant='success'>{message}</Alert>}

			<Form.Row>
				<Form.Group as={Col} controlId="formGridEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
				</Form.Group>
			</Form.Row>



			<Button disabled={loading} type="submit" className='w-100'>Reset Password</Button>
			<div className='w-100 text-center mt-3'><Link to='/register'>Register</Link></div>
			<div className='w-100 text-center mt-3'><Link to='/login'>Login</Link></div>

		</Form>
		);
}