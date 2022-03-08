import React, {useState} from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import Layout from '../components/layout';

const RegisterPage = () => {
    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [info, setInfo] = useState(false);


    const handleSubmit = (event) =>{
        console.log('Hello World', name, email, password)

        if (name && email && password){
            setName('')
            setEmail('')
            setPassword('')
            setInfo('success')

        } else{
            setInfo('failed')
        }
        event.preventDefault();
    }

    

    return (
    <Layout>
        {info === 'success' && (
            <Alert onClick={()=>{
                setInfo(false)
            }} variant='success'>
                Berhasil register 
            </Alert>
        )}
        {info === 'failed' && (
            <Alert variant='danger'>
                Gagal register 
            </Alert>
        )}
        <p>Sign Up and Start Learning!</p>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Fullname" name='name' value={name} onChange={(e)=>{
                    setName(e.target.value)
                }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                REGISTER
            </Button>
        </Form>
    </Layout>
  )
}

export default RegisterPage