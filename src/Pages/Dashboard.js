import React, { useEffect } from "react";
import axios from "axios";
import DasboardLayout from '../NewComponents/DashboardLayout'
import UpCommingAppointment from "../NewComponents/UpCommingAppointment/UpCommingAppointment";
import SalesChart from "../NewComponents/SalesChart/SalesChart";
import {userData} from "../TempData/DummyData";
const Dashboard = () => {
    // login user data
    const getAdminData = async () => {
        try {
            const res = await axios.post(
                "/api/v1/user/getAdminData", 
                {},
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAdminData();
    }, []);
    return (
        <DasboardLayout>
            <div className="home">
            <SalesChart data={userData} title="User Analytics" grid dataKey="Active User"/>
                <div className="homeWidgets">
                    <UpCommingAppointment/>
                </div>
            </div>
        </DasboardLayout>
    );
};

export default Dashboard;