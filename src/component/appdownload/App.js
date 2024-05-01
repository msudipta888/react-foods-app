import React from 'react'
import './app.css'
import { assets } from '../assets/assets/assets.js'
const App = () => {
  return (
    <div className='appdownload' id='app-download'>
      <p>For Better Experience Download <br /></p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default App
