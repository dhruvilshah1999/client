import React from 'react'
import '../Styles/Register.css'
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginIn = () => {

    const navigate = useNavigate();

    //form handler
    const onfinishHandler = async (values) => {
      try {
        const res = await axios.post("/api/v1/user/login", values);
        if (res.data.success) {
          message.success("Loged In Successfully!");
          navigate("/homepage");
        } else {
          message.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        message.error("Something Went Wrong");
      }
    };

  return (
    <div className='form-container'>
        <Form layout='vertical' onFinish={onfinishHandler} className='reg-form'>
            <h1>Admin Login Page</h1>
            <Form.Item className='Textfields' label="Email" name="email">
                <Input type="email" required/>
            </Form.Item>
            <Form.Item className='Textfields' label="Password" name="password">
                <Input type="password" required/>
            </Form.Item>
            {/* <Form.Item className='Textfields' label="Confirm Password" name="cpwd">
                <Input type="password" required/>
            </Form.Item> */}
            <Link to='/register' className='m-2'>Not a User</Link>
            <button className='btn btn-primary' type='submit'>Log In</button>
        </Form>
    </div>
  )
}

export default LoginIn