import React, { useContext, useState } from 'react'
import './fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/Context'


const FoodItem = ({ id, name, image, price, description }) => {

    const [itemCount, setItemCount] = useState(0)
    const {cartItem , setCartItem , addProduct ,removeProduct } = useContext(StoreContext)
    return (
        <div className='food-item'>
            <div className="contaier-img">
                <img className='food-item-img' src={image} alt="" />
                {!cartItem[id] ? <img onClick={() => addProduct(id)} className='add' src={assets.add_icon_white} />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeProduct(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItem[id]}</p>
                        <img onClick={() => addProduct(id)} src={assets.add_icon_green} alt="" />
                    </div>}
            </div>
            <div className="food-item-info">
                <div className="food-rate">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-description">
                    {description}
                </p>
                <p className="food-item-price">{price} $</p>
            </div>
        </div>
    )
}

export default FoodItem