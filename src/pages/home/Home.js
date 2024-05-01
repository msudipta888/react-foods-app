import React, { useState } from 'react'
import './home.css'
import Header from '../../component/header/Header.js'
import Exploermenu from '../../component/exploer/Exploermenu.js'
import Fooddis from '../../component/fooddisplay/Fooddis.js'
import App from '../../component/appdownload/App.js'
const Home = () => {
  const [category,setCategory] =useState("all");
  return (
    <div>
      <Header/>
      <Exploermenu category={category} setCategory={setCategory}/>
      <Fooddis category={category}/>
      <App/>
    </div>
  )
}

export default Home
