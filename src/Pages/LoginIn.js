import React from 'react'
import { Form, Input } from 'antd';
import '../Styles/Register.css'
import { Link } from 'react-router-dom';

const onFinishHandler = (values) => {
    console.log(values);
}

const LoginIn = () => {
  return (
    <div className='form-container'>
        <Form layout='vertical' onFinish={onFinishHandler} className='reg-form'>
            <h1>Admin Login Page</h1>
            <Form.Item className='Textfields' label="Email" name="email">
                <Input type="email" required/>
            </Form.Item>
            <Form.Item className='Textfields' label="Password" name="pwd">
                <Input type="password" required/>
            </Form.Item>
            <Form.Item className='Textfields' label="Confirm Password" name="cpwd">
                <Input type="password" required/>
            </Form.Item>
            <Link to='/register' className='m-2'>Not a User</Link>
            <button className='btn btn-primary' type='submit'>Go To Register</button>
        </Form>
    </div>
  )
}

export default LoginIn