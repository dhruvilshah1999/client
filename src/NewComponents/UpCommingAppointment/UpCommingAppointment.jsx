import "../UpCommingAppointment/UpCommingAppointment.css";
import { Visibility } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";

export default function UpCommingAppointment() {

    const [appointment, setAppointment] = useState([]);
    // const [currentPage, setCurrentPage] = useStage(1);
    // const [postPerPage, setPostPerPage] = useState(2);
    //get Employees
    const getAppointment = async () => {
      try {
        const res = await axios.get("/api/v1/admin/getAllAppointment", {
            headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (res.data.success) {
            setAppointment(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
        getAppointment();
    }, []);
  
    // const lastPostIndex = currentPage * postPerPage;
    // const firstPostIndex = lastPostIndex - postPerPage;
    // const currentPost = appointment.slice(firstPostIndex,lastPostIndex)
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      {appointment.map((data,id)=>{
      return <ul key={id} className="widgetSmList">
        <li className="widgetSmListItem"> 
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{data.firstName}</span>
            <span className="widgetSmUserTitle">Appointment Handled by {data.empFirstName}</span>

          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
          })}
    </div>
  );
}