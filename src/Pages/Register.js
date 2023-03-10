import React from "react";
import "../Styles/Register.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import logo from '../assets/Register.jpg'


const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Email Verification
    function ValidateEmail(email) {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email.match(mailformat)) {
  
        return true;
      }
      else {
        alert("You have entered an invalid email address fromat!");
        return false;
      }
    }

    // Password Verification
    function CheckPassword(pwd) {
      var passw = /^[A-Za-z]\w{7,14}$/;
      if (pwd.match(passw)) {
        return true;
      }
      else {
        alert('You have entered an invalid password format!')
        return false;
      }
    }

    //form handler
    const onfinishHandler = async (values) => {
      var email = ValidateEmail(values.email);
      var pwd = CheckPassword(values.password);
      if(email === true && pwd === true){
        try {
          dispatch(showLoading());
          const res = await axios.post("/api/v1/user/register", values);
          dispatch(hideLoading());
          if (res.data.success) {
            message.success("Register Successfully!");
            navigate("/login");
          } else {
            message.error(res.data.message);
          }
        } catch (error) {
          dispatch(hideLoading());
          console.log(error);
          message.error("Something Went Wrong");
        }
     }
    };
  return (
    <div className="container">
      <div className='pic'>
        <img src={logo}/>
      </div>
      <div className="login">
        <Form className="form" onFinish={onfinishHandler}>
          <h1 className="form-h1">Registration</h1>
          <hr />
          <p className="form-p">B.I.A.S - Leave the Everything to Us</p>

          <label className='form-label'>Name</label>
          <Form.Item name="name">
            <Input className='input' type="text" placeholder="Name" required/>
          </Form.Item>

          <label className='form-label'>Email-Id</label>
          <Form.Item name="email">
            <Input className='input' type="email" required/>
          </Form.Item>

          <label className='form-label'>Password</label>
          <Form.Item name="password">
            <Input className='input' type="password" placeholder="Password" required/>
          </Form.Item>

          <p><a href='/login'>Already User Login Here</a></p>
          <button>Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default Register;