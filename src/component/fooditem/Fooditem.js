import React, { useContext } from "react";
import "./fooditem.css";
import  {assets}  from "../assets/assets/assets.js";
import { StoreContext } from "../../context/StoreContext.js";

const Fooditem = ({ id, name, description, price, img }) => {
  const {cartItem,addTocart,removeTocart}= useContext(StoreContext)
  return (
    <div className="food_item">
      <div className="img-container">
        <img className="item" src={img} alt="" />
        {!cartItem[id] ? (
          <img
            className="add"
            onClick={() => addTocart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-con">
            <img
              onClick={() =>removeTocart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() =>  addTocart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      {/* <Cart cnt={cnt}/> */}
      <div className="food_item-info">
        <div className="food-item-info-rating">
          <p className="name">{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
