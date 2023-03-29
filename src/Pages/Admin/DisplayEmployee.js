import React, { useState, useEffect } from "react";
import DashboardLayout from '../../NewComponents/DashboardLayout'
import axios from "axios";
import { Table } from "antd";

const DisplayEmployee = () => {

    const [employee, setEmployee] = useState([]);
    //get Employees
    const getEmployye = async () => {
      try {
        const res = await axios.get("/api/v1/admin/getAllEmployee", {
            headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (res.data.success) {
          setEmployee(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
        getEmployye();
    }, []);
  
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        render: (text, record) => (
          <span>
            {record.firstName} {record.lastName}
          </span>
        ),
      },
      {
        title: "Status",
        dataIndex: "status",
      },
      {
        title: "phone",
        dataIndex: "phone",
      },
      // {
      //   title: "Actions",
      //   dataIndex: "actions",
      //   render: (text, record) => (
      //     <div className="d-flex">
      //       {record.status === "valid" ? (
      //         <button className="btn btn-success">Valid Employee</button>
      //       ) : (
      //         <button className="btn btn-danger">Invalid Employee</button>
      //       )}
      //     </div>
      //   ),
      // },
    ];

  return (
    <DashboardLayout>
        <h1 className="text-center m-3">All Employee</h1>
        <Table columns={columns} dataSource={employee} />
    </DashboardLayout>
  )
}

export default DisplayEmployee