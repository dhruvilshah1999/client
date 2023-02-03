import React from 'react'
import { Form, Input } from 'antd';
import '../Styles/Register.css'
import { Link } from 'react-router-dom';

const onFinishHandler = (values) => {
    console.log(values);
}

const Register = () => {
  return (
    <div className='form-container'>
        <Form layout='vertical' onFinish={onFinishHandler} className='reg-form'>
            <h1>Admin Register Page</h1>
            <Form.Item className='Textfields' label="Name" name="name">
                <Input type="text" required/>
            </Form.Item>
            <Form.Item className='Textfields' label="Email" name="email">
                <Input type="email" required/>
            </Form.Item>
            <Form.Item className='Textfields' label="Password" name="pwd">
                <Input type="password" required/>
            </Form.Item>
            {/* <Form.Item className='Textfields' label="Confirm Password" name="cpwd">
                <Input type="password" required/>
            </Form.Item> */}
            <Link to='/login' className='m-2'>Already User Login here</Link>
            <button className='btn btn-primary' type='submit'>Register</button>
        </Form>
    </div>
  )
}

export default Register