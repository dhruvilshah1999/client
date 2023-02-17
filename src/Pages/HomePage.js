import React from 'react'
import SlidingBar from '../Components/SlidingBar'
import NavBar from '../Components/NavBar'
import MainDash from '../Components/MainDash'
import RightPart from '../Components/RightPart'
import '../Styles/Homepage.css'

const HomePage = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <SlidingBar/>
        <MainDash/>
        <RightPart/>
      </div>
    </div>
  );
}

export default HomePage