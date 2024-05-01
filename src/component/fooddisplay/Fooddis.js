import React, {useContext, useState } from "react";
import "./fooddis.css";
import Fooditem from "../fooditem/Fooditem.js";
import { StoreContext } from "../../context/StoreContext.js";
const Fooddis = ({ category }) => {
  const {food_list} =useContext(StoreContext);
  return (
    <div className="food-dis">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((val, ind) => {
          //console.log(val.category)
          if (category==="all" || category===val.category) {
           return <Fooditem
              key={ind}
              id={val._id}
              description={val.description}
              name={val.name}
              price={val.price}
              img={val.image}
            />
          }
        })}
      </div>
    </div>
  );
};

export default Fooddis;
