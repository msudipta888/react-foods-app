import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../assets/assets/assets.js";
import { Link } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
//import { BsSunFill } from "react-icons/bs";
import { StoreContext } from "../../context/StoreContext.js";

const Navbar = ({ setShowlogin }) => {
  const [menu, setMenu] = useState("");
  const { subTotal, darktheme } = useContext(StoreContext);
  const list = (val) => {
    return setMenu(val);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} className="logo" />
      </Link>

      <ul className="navmenu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          {" "}
          Home
        </Link>
        <a
          href="#exploer-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <Link
          to="/contact"
          onClick={() => setMenu("contact")}
          className={menu === "contact"? "active" : ""}
        >
          Contact us
        </Link>
        <a
          href="#app-download"
          onClick={() => setMenu("ma")}
          className={menu === "ma" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
         Footer
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navabar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={subTotal() === 0 ? "" : "dot"}> </div>
        </div>
        <button onClick={() => setShowlogin(true)} on>
          Sign in
        </button>
      </div>
      <div
        style={{
          backgroundColor: "#1c1c1c",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "10px",
          cursor: "pointer",
        }}
      >
        <BsFillMoonFill
          onClick={darktheme}
          style={{
            color: "#ffffff",
            fontSize: "27px",
            fontWeight: "500",
          }}
        />
      </div>
    </div>
  );
};

export { Navbar };
