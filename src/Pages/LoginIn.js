import React from 'react'
import '../Styles/Login.css'
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/Login.jpg'

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
    <div className="container">
      <div className="login">
        <Form className="form" onFinish={onfinishHandler}>
          <h1 className="form-h1">Admin Login</h1>
          <hr />
          <p className="form-p">B.I.A.S - Leave the Everything to Us</p>
          <label className='form-label'>Email</label>
          <Form.Item name="email">
            <Input className='input' type="text" placeholder="Email" />
          </Form.Item>
          
          <label className='form-label'>Password</label>
          <Form.Item name="password">
            <Input className='input' type="password" placeholder="Password" />
          </Form.Item>
          <p><a href='/'>Not a User</a></p>
          <button>Submit</button>
          <p><a href="#">Forgot Password?</a></p>
        </Form>
      </div>
      <div className='pic'>
        <img src={logo}/>
      </div>
    </div>
  )
}

export default LoginIn