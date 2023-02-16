import React from "react";
import "../Styles/Register.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
    <>
        <div className='form-container'>
            <Form layout='vertical' onFinish={onfinishHandler} className='reg-form'> 
                <h1>Admin Register Page</h1>
                <Form.Item className='Textfields' label="Name" name="name">
                    <Input type="text" required/>
                </Form.Item>
                <Form.Item className='Textfields' label="Email" name="email">
                    <Input type="email" required/>
                </Form.Item>
                <Form.Item className='Textfields' label="Password" name="password">
                    <Input type="password" required/>
                </Form.Item>
                {/* <Form.Item className='Textfields' label="Confirm Password" name="cpwd">
                    <Input type="password" required/>
                </Form.Item> */}
                <Link to='/login' className='m-2'>Already User Login here</Link>
                <button className='btn btn-primary' type='submit'>Register</button>
            </Form>
        </div>
    </>
  );
};

export default Register;