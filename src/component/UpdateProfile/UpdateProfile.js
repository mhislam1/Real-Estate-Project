import React, {useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Form,Col,Button,Alert} from 'react-bootstrap'
import {useAuth} from '../Context/AuthContext'

export default function UpdateProfile() {
	const emailRef = useRef();
	const passRef = useRef();
	const passConRef = useRef();


	const {currentUser, updateEmail, updatePassword} = useAuth();
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	function handleSubmit(e) {
		e.preventDefault();

		if(passRef.current.value !== passConRef.current.value){
			return setError('Passwords do not match')
		}

        const promises = []

        setLoading(true)
        setError('')

        if (emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }

        if(passRef.current.value){
            promises.push(updatePassword(passRef.current.value))
        }

        Promise.all(promises)
        .then(() => {
            history.push('/home')
        })
        .catch(() => {
            setError('Failed to update profile')
        })
        .finally(() => {
            setLoading(false)
        })
    }

	return (
		<Form style={{backgroundColor:'#f5f5f5 '}} onSubmit={handleSubmit}>
			<h2 className='text-center mb-4'>Update Profile</h2>

			{error && <Alert variant='danger'>{error}</Alert>}
			<Form.Row>
				<Form.Group as={Col} controlId="formGridEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Enter email" ref={emailRef} defaultValue={currentUser.email} required/>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} controlId="formGridPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Leave blank to keep the same password" ref={passRef} />
				</Form.Group>
			</Form.Row>

			<Form.Row>
                <Form.Group as={Col} controlId="confirmPassword">
				<Form.Label>Re-enter Password</Form.Label>
				<Form.Control type="password" placeholder="Leave blank to keep the same password" ref={passConRef} />
				</Form.Group>
            </Form.Row>

			<Button disabled={loading} type="submit" className='w-100 text-center mt-2'>Update </Button>
			<p><Link to='/home'>Cancel</Link></p>

		</Form>
		);
}