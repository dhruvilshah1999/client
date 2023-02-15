import React from 'react'
import '../Styles/Login.css'
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import logo from '../assets/Login.jpg'


const LoginIn = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Email Verification
  function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {

      return true;
    }
    else {
      alert("You have entered an invalid email address!");
      return false;
    }
  }

 

  return (
    <div className="container">
      <div className="login">
        <Form className="form" onFinish={onfinishHandler}>
          <h1 className="form-h1">Login</h1>
          <hr />
          <p className="form-p">B.I.A.S - Leave the Everything to Us</p>
          
          <label className='form-label'>Email</label>
          <Form.Item name="email">
            <Input className='input' type="text" placeholder="Email" required/>
          </Form.Item>
          
          <label className='form-label'>Password</label>
          <Form.Item name="password">
            <Input className='input' type="password" placeholder="Password" required/>
          </Form.Item>

          <p><a href='/'>Not a User</a></p>
          <button>Submit</button>
          <p><a href="/ForgetPassword">Forgot Password?</a></p>
        </Form>
      </div>
      <div className='pic'>
        <img src={logo}/>
      </div>
    </div>
  )
}

export default LoginIn