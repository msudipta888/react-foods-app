import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../context/StoreContext.js'
const Placeorder = () => {
  const {subTotal,bodyColor}=useContext(StoreContext)
  return (
    <form className='place-order' onSubmit={(e)=>e.preventDefault()}>
      <div className="place-order-left">
        <p className={`cart_${bodyColor==="black"?"dark":"light"}`}>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
        <input type="text" placeholder='Zip code'/>
        <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </div>

<div className="place-order-right">

          <h2>Cart Totals</h2>
            <div className={`cart-total-detail_${bodyColor==="black"?"dark":"light"}`}>
              <p>Subtotal </p>
              <p>{subTotal()}</p>
            </div>
            <hr />
            <div className={`cart-total-detail_${bodyColor==="black"?"dark":"light"}`}>
              <p>Delivary Fee </p>
              <p>{2}</p>
            </div>
            <hr />
            <div className={`cart-total-detail_${bodyColor==="black"?"dark":"light"}`}>
              <p>
                <b>Total</b>
              </p>
              <p>{subTotal() + 2}</p>
            </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
    </form>
  )
}

export default Placeorder
