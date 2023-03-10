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

    //form handler
    const onfinishHandler = async (values) => {
      var email = ValidateEmail(values.email);
      // if(email === true){
        try {
          dispatch(showLoading());
          const res = await axios.post("/api/v1/user/login", values); 
          window.location.reload();
          dispatch(hideLoading());
          if (res.data.success) {
            console.log("Token",res.data.token);
            localStorage.setItem("token", res.data.token);
            message.success("Loged In Successfully!");
            navigate("/homepage");
          } else {
            message.error(res.data.message);
          }
        } catch (error) {
          dispatch(hideLoading());
          console.log(error);
          message.error("Something Went Wrong");
        }
      // }
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