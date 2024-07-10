import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Componets/Context/Context'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const { cartItem, food_list, removeProduct , getTotal} = useContext(StoreContext);
  const navigate = useNavigate(); 

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
                <div className="cart-title cart-items-items">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>{item.price * cartItem[item._id]}</p>
                  <p onClick={() => { removeProduct(item._id) }} className='corss'>x</p>
                </div>
                <hr />
              </>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className='card-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className="card-details">
              <p>Sub Total</p>
              <p>${getTotal()}</p>
            </div>
            <hr />
            <div className="card-details">
              <p>Delivery Free</p>
              <p>${getTotal() > 0 ? 2 : 0}</p>
            </div>
            <hr />
            <div className="card-details">
              <b>Total</b>
              <b>${getTotal() > 0 ? getTotal() + 2 : getTotal()}</b>
            </div>
          </div>
          <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If tou have a promocode, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Enter Promocode..'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart