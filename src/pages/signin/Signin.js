import React, { useState } from 'react'
import './sign.css'
import { assets } from '../../component/assets/assets/assets.js'
const Signin = ({setShowlogin}) => {
  const [currstate,setCurrstate] =useState("Sign up")
  return (
    <div className='login-popup'>
     <form className='login-popup-container'>
      <div className="login-popup-title">
        <h2>{currstate}</h2>
        <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
      </div>
      <div className="inputs">
        {currstate==="Login"?<></>: <input type="text" placeholder='Your name' required/>}
        <input type="email" placeholder='Your email' required/>
        <input type="password" placeholder='Password' required/>
      </div>
      <button>{currstate==="Sign up"?"Create account":"Login"}</button>
      <div className="condition">
        <input type="checkbox" required/><br />
        <p>By coninuing,i agree all privacy policy</p>
      </div>
      {
        currstate==="Login"? <p>Create a new accout?<span onClick={()=>setCurrstate("Sign up")}>Click here</span> </p>: <p>Already have an account? <span onClick={()=>setCurrstate("Login")}>Login here</span></p>
      }
     
     </form>
    </div>
  )
}

export default Signin
