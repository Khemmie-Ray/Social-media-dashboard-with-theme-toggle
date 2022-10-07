import Overview from "./Overview"
import data from "./data"
import Dashboard from "./Dashboard"
import dashboarddata from "./dashboarddata"
import React from "react"
// import { useState } from "react"


export default function App() {

  const [lightMode, setLightMode] = React.useState(true)
    
    function toggleLightMode() {
        setLightMode(prevTheme => !prevTheme)
        console.log(lightMode)
    }

  const overviewData = data.map(info => {
    return (
      <Overview
        key={info.id}
        {...info}
        lightMode={lightMode}
      />
    )
  })

  const dashboardData =  dashboarddata.map(content => {
    return (
      <Dashboard 
        key={content.id}
        {...content}
        lightMode={lightMode}
      />
    )
  })

  const sliderClass = lightMode ? "toggle-slider light" : "toggle-slider"
  

  return (
    <div className={!lightMode ? "app" : "bg-light"}>
    <div id="container">
      <header>
        <div className="box-one top-title">
          <div className="titleText">
        <h1 style={{color: lightMode ? "black" : "hsl(0, 0%, 100%)"}}>Social Media Dashboard</h1>
        <p className="total-figure">Total Followers: 23,004</p>
        </div>
        <div className="toggleBox">
         <p className="switch-text">Darkmode</p>
         <div className={sliderClass} onClick={toggleLightMode}>
         <div className={lightMode ? "toggle-inner light" : "toggle-inner"}></div>
         </div>
        </div>
        </div>
      </header> 
      <main>
        <div className="dashboard">
          {dashboardData}
        </div>
        <h3 style={{color: lightMode ? "hsl(228, 34%, 66%)" : "hsl(0, 0%, 100%)"}}>Overview - Today</h3>
        <div className="overview">
          {overviewData}
        </div>
      </main>
    </div>
    </div>
  )
}

