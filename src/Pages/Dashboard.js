import React, { useEffect } from "react";
import axios from "axios";
import DasboardLayout from '../NewComponents/DashboardLayout'
import UpCommingAppointment from "../NewComponents/UpCommingAppointment/UpCommingAppointment";
import SalesChart from "../NewComponents/SalesChart/SalesChart";
import {userData} from "../TempData/DummyData";
import InventoryList from "../NewComponents/InventoryList/InventoryList";
import "../Styles/DashboardWidget.css"
import FeaturedProfitSales from "../NewComponents/FeaturedProfitSales/FeaturedProfitSales";

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
             <FeaturedProfitSales />    
            <SalesChart data={userData} title="User Analytics" grid dataKey="Active User"/>
                <div className="homeWidgets">
                    <InventoryList />
                    <UpCommingAppointment/>
                </div>
                
            </div>
        </DasboardLayout>
    );
};

export default Dashboard;