import React from 'react'
import SlidingBar from '../Components/SlidingBar'
import NavBar from '../Components/NavBar'
import MainDash from '../Components/MainDash'
import '../Styles/Homepage.css'

const HomePage = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <SlidingBar/>
        <MainDash/>
        {/* <RightSide/> */}
      </div>
    </div>
  );
}

export default HomePage