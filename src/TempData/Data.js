// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  import { keyboard } from "@testing-library/user-event/dist/keyboard";
  
  // Recent Card Imports
  import img1 from "../assets/img1.png";
  import img2 from "../assets/img2.png";
  import img3 from "../assets/img3.png"; 

  // Import Paths
  import employee from "../Pages/AddNewEmployee"
  
  // Sidebar Data
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "Appointments",
    },

    {
      icon: UilPackage,
      heading: 'Inventory'
    },
    {
      icon: UilChart,
      heading: 'Employee',
      link: '/employee'
    },
  ];
  
  // Analytics Cards Data
  export const cardsData = [
    {
      title: "Customer Sales",
      color: {
        backGround: "linear-gradient(180deg, #bd6060 0%, #652929 100%)",
        boxShadow: "0px 10px 20px 0px #973e3e",
      },
      barValue: 70,
      value: "25,970",
      png: UilUsdSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Inventory Sales",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
    {
      title: "Today's Revenue",
      color: {
        backGround: "linear-gradient(180deg, #F1AA66 0%, #EC8E33 100%)",
        boxShadow: "0px 10px 20px 0px #EE9C4D",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
  ];
  
  // Recent Update Card Data
  export const UpdatesData = [
    {
      img: img1,
      name: "Barber 1",
      noti: "has Customer 1 Appointment.",
      time: "3:30 PM - 17/02/2023",
    },
    {
      img: img2,
      name: "Barber 2",
      noti: "has Customer 2 Appointment.",
      time: "9:30 AM - 17/02/2023",
    },
    {
      img: img3,
      name: "Barber 3",
      noti: "has Customer 3 Appointment.",
      time: "7:30 PM - 17/02/2023",
    },
  ];