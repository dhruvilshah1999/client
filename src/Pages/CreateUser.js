import React from 'react'
import DasboardLayout from '../NewComponents/DashboardLayout'
import { Col, Form, Input, Row, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import axios from "axios";

const CreateUser = () => {
  const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //handle form
    const handleFinish = async (values) => {
      try {
        dispatch(showLoading());
        const res = await axios.post(
          "/api/v1/user/create-employee",
          { ...values, userId: user._id },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(hideLoading());
        if (res.data.success) {
          message.success(res.data.success);
          navigate("/");
        } else {
          message.error(res.data.success);
        }
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
        message.error("Somthing Went Wrong ");
      }
    // console.log(values);
    };
    return (
      <DasboardLayout>
        <h1 className="text-center">Add New User</h1>
        <Form layout="vertical" onFinish={handleFinish} className="m-3">
          <h4 className="">Personal Details : </h4>
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="First Name"
                name="firstName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="user first name" />
              </Form.Item>
            </Col>
      
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Phone No"
                name="phone"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="user contact no" />
              </Form.Item>
            </Col>

            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Email"
                name="email"
                required
                rules={[{ required: true }]}
              >
                <Input type="email" placeholder="user email address" />
              </Form.Item>
            </Col>

            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Password"
                name="password"
                required
                rules={[{ required: true }]}
              >
                <Input type="password" placeholder="user password" />
              </Form.Item>
            </Col>

            <Col xs={24} md={24} lg={8}>
              <button className="btn btn-primary form-btn" type="submit">
                Submit
              </button>
            </Col>
          </Row>
        </Form>
      </DasboardLayout>
    );
}

export default CreateUser