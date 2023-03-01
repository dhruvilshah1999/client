import React from "react";
import DasboardLayout from '../NewComponents/DashboardLayout'
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import axios from "axios";

const CreateEmployee = () => {
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
    
}

export default CreateEmployee