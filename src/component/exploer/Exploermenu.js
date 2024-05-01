import React from "react";
import "./exploer.css";
import { menu_list } from "../assets/assets/assets.js";
const Exploermenu = ({ category, setCategory }) => {
  return (
    <div>
      <div className="exploer-menu" id="exploer-menu">
        <h1>Exploer our menu</h1>
        <p><i>Check our foody items...</i></p>
        <div className="exploer-menu-list">
          {menu_list.map((val, id) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === val.menu_name ? "all" : val.menu_name
                  )
                }
                key={id}
                className="explore-menu-list-item"
              >
                <img
                  className={category === val.menu_name ? "active" : ""}
                  src={val.menu_image}
                  alt=""
                />
                <p>{val.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Exploermenu;
