import React, { useEffect } from "react";
import axios from "axios";
import DasboardLayout from '../NewComponents/DashboardLayout'

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
            <h1>Dashboard</h1>
        </DasboardLayout>
    );
};

export default Dashboard;