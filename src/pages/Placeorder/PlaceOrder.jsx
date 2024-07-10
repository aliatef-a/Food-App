import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../Componets/Context/Context'


const PlaceOrder = () => {

  const {getTotal} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="order-left">
        <p className='title'>Delivery Information</p>
        <div className='multi-fileds'>
          <input type="text" placeholder='Frist Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className='multi-fileds'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className='multi-fileds'>
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="order-right">
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
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder