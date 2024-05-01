import React, { useState,useContext } from "react";
import {Navbar} from "./component/Navbar/Navbar.js";
import './StyleApp.css'
//import {Routes,Route} from 'react-router-dom'
import Home from "./pages/home/Home.js";
import Cart from "./pages/cart/Cart.js";
import Placeorder from "./pages/placeorders/Placeorder.js";

import Footer from "./component/footer/Footer.js";
import Signin from "./pages/signin/Signin.js";
import { Route, Routes } from "react-router-dom";
import { StoreContext } from "./context/StoreContext.js";
//import Contact from "./pages/Contact/Contact.js";
import ContactForm from "./pages/Contact/ContactForm.js";
const App = () => {
  const [showlogin,setShowlogin]= useState(false);
  const {bodyColor} =
    useContext(StoreContext);
    return (
        <>
        
        {showlogin?<Signin setShowlogin={setShowlogin}/>:<></>}
        <div className="app">
            <Navbar setShowlogin={setShowlogin}/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/cart" element={<Cart bodyColor={bodyColor}/>}/>
              <Route path="/order" element={<Placeorder/>}/>
             <Route path="/contact" element={<ContactForm/>}/>
            </Routes>
        </div>
          
        <Footer/>
        </>
    );
};
 
export default App;