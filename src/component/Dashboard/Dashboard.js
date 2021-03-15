import React, {useState} from 'react'
import {Form,Button,Alert,Col} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from '../Context/AuthContext'

export default function Dashboard() {
    const [error, setError] = useState('')
    const {currentUser,logout} = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch (error) {
            setError('Failed to logout')
        }
    }

    return (
        <>
        <Form>
            <Form.Row>
                <Form.Group as={Col}>
                <h2 className='text-center mb-4'>Profile</h2>{"\n"}
                {error && <Alert variant='danger'>{error}</Alert>}
                <strong>Email:</strong>{currentUser.email}
                <Link to='/update' className='btn btn-primary w-100 mt-3'>Update Profile</Link>
                </Form.Group>
            </Form.Row>
        </Form>
        <div className='w-100 text-center mt-2'>
            <Button variant='link' onClick={handleLogout}>Log Out</Button>
        </div>
        </>
    )
}
