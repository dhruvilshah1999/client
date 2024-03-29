import React from "react";
import '../Styles/DashboardLayout.css';
import { userMenu, adminMenu, employeeMenu } from '../TempData/AllData';

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";

const Layout = ({ children }) => {
    const { user } = useSelector((state) => state.user);
    console.log("Dashboard User Result", user);
    const location = useLocation();
    const navigate = useNavigate();
    // logout funtion
    const handleLogout = () => {
        localStorage.clear();
        message.success("Logout Successfully");
        navigate("/login");
    };

    // redering menu list
    // const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;
    const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isEmployee
      ? employeeMenu
      : userMenu;

    return (
        <>
            <div className="main">
                <div className="layout">
                    <div className="sidebar">
                        <div className="logo">
                            <h6>B.I.A.S</h6>
                            <hr />
                        </div>
                        <div className="menu">
                            {SidebarMenu.map((menu) => {
                                const isActive = location.pathname === menu.path;
                                return (
                                    <>
                                        <div className={`menu-item ${isActive && "active"}`}>
                                            <i className={menu.icon}></i>
                                            <Link to={menu.path}>{menu.name}</Link>
                                        </div>
                                    </>
                                );
                            })}
                            <div className={`menu-item `} onClick={handleLogout}>
                                <i className="fa-solid fa-right-from-bracket"></i>
                                <Link to="/login">Logout</Link>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="header">
                            <div className="header-content" style={{ cursor: "pointer" }}>
                                <Badge
                                    count={user && user.notifcation.length}
                                    onClick={() => {
                                        navigate("/notification");
                                    }}
                                >
                                    <i class="fa-solid fa-bell"></i>
                                </Badge>
                                <Link to="/profile">{user?.name}</Link>
                            </div>
                        </div>
                        <div className="body">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;