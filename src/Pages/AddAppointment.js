import React from "react";
import DasboardLayout from '../NewComponents/DashboardLayout'
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import axios from "axios";

const AddAppointment = () => {
    const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //handle form
    const handleFinish = async (values) => {
      try {
        dispatch(showLoading());
        const res = await axios.post(
          "/api/v1/user/create-appointment",
          { ...values, appointmentCreatorId: user._id },
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
        <h1 className="text-center">Add Appointment</h1>
        <Form layout="vertical" onFinish={handleFinish} className="m-3">
          <h4 className="">User Details</h4>
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="First Name"
                name="firstName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Users first name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Last Name"
                name="lastName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Users last name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Birth Date"
                name="date"
                required
                rules={[{ required: true }]}
              >
                <Input type="date" placeholder="Users Birth Date" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Age"
                name="age"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Users Age" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Gender"
                name="gender"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="User Gender" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Phone No"
                name="phone"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Users contact no" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Email"
                name="email"
                required
                rules={[{ required: true }]}
              >
                <Input type="email" placeholder="Users email address" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Address"
                name="address"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Users address" />
              </Form.Item>
            </Col>
          </Row>
          <h4>Employee Details:</h4>
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="First Name"
                name="empFirstName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Employee First Name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Last Name"
                name="empLastName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Employee Last Name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Contact Number"
                name="empCntNum"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Employee Contact Numbero" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Service Category"
                name="serviceCategory"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter Service Category" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Service Name"
                name="serviceName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter Service Name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Price"
                name="price"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter The Final Price" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item label="Booking Timings" name="bookingTimings" required>
                <TimePicker.RangePicker format="HH:mm" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}></Col>
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

export default AddAppointment