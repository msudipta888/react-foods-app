import React, { useContext, useState } from "react";
import "./cart.css";
import { StoreContext } from "../../context/StoreContext.js";
import { useNavigate } from "react-router-dom";

const Cart = ({bodyColor}) => {
  const { cartItem, food_list, removeTocart, subTotal} =
    useContext(StoreContext);
    const navigate= useNavigate();
   
  return (
    <>
     <div className="main_cart">
    <div className={`cart_${bodyColor==="black"?"dark":""}`}>
    <div className="cart-content">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((val) => {
          if (cartItem[val._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={val.image} alt="" />
                  <p>{val.name}</p>
                  <p>${val.price}</p>
                  <p>{cartItem[val._id]}</p>
                  <p>${val.price * cartItem[val._id]}</p>
                  <p onClick={() => removeTocart(val._id)} className="cross">
                    {" "}
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="card-bottom">
        <div className="card-total">
          <h2>Cart Totals</h2>
            <div className="cart-total-details">
              <p>Subtotal </p>
              <p>{subTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivary Fee </p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>
                <b>Total</b>
              </p>
              <p>{subTotal() * 2}</p>
            </div>
        
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-right">
          <p>If you have promo code, Enter here!</p>
          <div className="select">
          <input type="text" placeholder="promo code" /> <button className="btn">
            Submit
          </button>
          </div>
        </div>
      </div>
      
    </div>
    </div>
    </>
  );
};

export default Cart;
