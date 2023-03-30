import "../UpCommingAppointment/UpCommingAppointment.css";
import { Visibility } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Pagination } from "antd";

export default function UpCommingAppointment() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  const [appointment, setAppointment] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedItems, setDisplayedItems] = useState([]);
  const totalPages = Math.ceil(appointment.length / 2);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  //get Appointment
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

  useEffect(() => {
    const startIndex = (currentPage - 1) * 2;
    const endIndex = startIndex + 2;
    const itemsToDisplay = appointment.slice(startIndex, endIndex);
    setDisplayedItems(itemsToDisplay);
  }, [currentPage, appointment]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      {displayedItems.map((data, id) => {
        return (
          <ul key={id} className="widgetSmList">
            <li className="widgetSmListItem">
              <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{data.firstName}</span>
                <span className="widgetSmUserTitle">
                  Appointment Handled by {data.empFirstName}
                </span>
              </div>
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{data.bookingTimings[0].split('T')[1].substring(0, 5)} To {data.bookingTimings[1].split('T')[1].substring(0, 5)}</span>
                <span className="widgetSmUserTitle">
                  On {data.bookingTimings[0].split("T",1)}
                </span>
              </div>
              <div className="widgetSmUser">
                <span className="widgetSmUsername">${data.price}</span>
              </div>
              <div className="widgetLgStatus">
                <Button type="Approved" />
              </div>
            </li>
          </ul>
        );})}
      <div className="handleButtons">
        <button className="handlePrevPage" onClick={handlePrevPage}>{'<'}</button>
        <button className="handleNextPage" onClick={handleNextPage}>{'>'}</button>
      </div>
    </div>
  );
}
