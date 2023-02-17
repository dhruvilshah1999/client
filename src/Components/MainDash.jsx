import React from "react";
import Cards from '../Components/Cards'
import Table from "../Components/Table";
import "../Styles/MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
