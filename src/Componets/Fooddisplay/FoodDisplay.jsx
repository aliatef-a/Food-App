import React, { useContext, useState } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../Context/Context'
import FoodItem from '../foodItem/FoodItem'


const FoodDisplay = ({ catogory }) => {
    const { food_list } = useContext(StoreContext)
    const [filter , setFilter] = useState('')
    console.log(filter);
    
    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div onClick={() => setFilter(food_list.category)} className='food-display-list'>
                {food_list.map((item, index) => {
                    if (catogory == 'ALL' || catogory === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} 
                    image={item.image} price={item.price} 
                    description={item.description} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay