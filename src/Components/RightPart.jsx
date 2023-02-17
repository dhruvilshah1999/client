import React from "react";
import Appointment from "../Components/Appointment";
import "../Styles/RightPart.css"

const RightPart = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Upcomming Appointment</h3>
        <Appointment />
      </div>
    </div>
  );
};

export default RightPart;