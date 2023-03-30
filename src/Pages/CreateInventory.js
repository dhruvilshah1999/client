import React from "react";
import DasboardLayout from '../NewComponents/DashboardLayout'
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import axios from "axios";

const CreateInventory = () => {
    const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //handle form
    const handleFinish = async (values) => {
      try {
        dispatch(showLoading());
        const res = await axios.post(
          "/api/v1/admin/create-inventory",
          { ...values, inventoryCreatorId: user._id },
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
        <h1 className="text-center">Add New Inventory</h1>
        <Form layout="vertical" onFinish={handleFinish} className="m-3">
          <h4 className="">Inventory Details</h4>
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Item Name"
                name="itemName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter Item name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Item Category"
                name="itemCategory"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter Item Category" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Item Manufacturing Date"
                name="manuDate"
                required
                rules={[{ required: true }]}
              >
                <Input type="date" placeholder="Enter Manufacturing Date" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Item Manufacturer"
                name="manuCmp"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter Manufacturer or Company Name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Item Expirey Date"
                name="expDate"
                required
              >
                <Input type="date" placeholder="Enter Item Expirey Date" />
              </Form.Item>
            </Col>
          </Row>
          <h4>Dealers Details:</h4>
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Delears First Name"
                name="dealersFName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Dealers First Name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Dealers Last Name"
                name="dealersLName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Dealers Last Name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Dealers Contact Number"
                name="dealersCntNum"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter Dealers Contact Number" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Dealers Email Address"
                name="dealersEmail"
                required
                rules={[{ required: true }]}
              >
                <Input type="email" placeholder="Enter Dealers Email Address" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Dealers Company Name"
                name="dealersCmpName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter Dealers Company Name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Dealers Company Address"
                name="dealersCmpAdd"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter Dealers Company Address" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Item Buying Price"
                name="buyPrice"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter Item Buying Price" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Item Selling Price"
                name="sellPrice"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter The Item Selling Price" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Item Stock"
                name="stock"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter The Item Stock" />
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

export default CreateInventory