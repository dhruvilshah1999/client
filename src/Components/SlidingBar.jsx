import React, { useState } from "react";
import "../Styles/Slidebar.css";
import Logo from "../assets/BIAS.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../TempData/Data.js";
import { UilBars } from "@iconscout/react-unicons";
import {motion} from 'framer-motion'
import { Link, useNavigate } from "react-router-dom";


const SlidingBar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          B<span>IA</span>S
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <Link to={item.link} /><span>{item.heading}</span>
            </div>
          );
        })} {/* Here Add the Contents */}
        {/* signoutIcon */}
        {/* <div className="menuItem"> */}
        <Link to='/login' className='menuItem'>
          <UilSignOutAlt href="/login" className="menu-logout"/>Log Out
          </Link>
        {/* </div> */}
      </div>
    </motion.div>
    </>
  );
};

export default SlidingBar;


// import React, { useState } from "react";
// import "../Styles/Slidebar.css";

// function SlidingBar() {
//     const links = [
//       { label: "Appointments", url: "/appointments" },
//       { label: "Inventory", url: "/inventory" }
//     ];
  
//     return (
//       <div className="admin-sidebar">
//         <ul>
//           {links.map((link) => (
//             <li key={link.url}>
//               <a href={link.url}>{link.label}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

// export default SlidingBar;
