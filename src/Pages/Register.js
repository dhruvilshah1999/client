import React from "react";
import "../Styles/Register.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/Register.jpg'


const Register = () => {
    const navigate = useNavigate();

    //form handler
    const onfinishHandler = async (values) => {
      try {
        const res = await axios.post("/api/v1/user/register", values);
        if (res.data.success) {
          message.success("Register Successfully!");
          navigate("/login");
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
      <div className='pic'>
        <img src={logo}/>
      </div>
      <div className="login">
        <Form className="form" onFinish={onfinishHandler}>
          <h1 className="form-h1">Admin Registration</h1>
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