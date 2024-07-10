import React from 'react'
import './explorMenu.css'
import { menu_list } from '../../assets/assets'



const ExploreMenu = ({catogory , setCatogory}) => {
    console.log(catogory);
  return (
    <div className='explore' id='menu'>
        <h1>Explore our menu</h1>
        <p className='explore-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience</p>
        <div className="explor-list">
            {menu_list.map((item , index) => {
                return (
                    <div onClick={() => setCatogory(pre => pre === item.menu_name ? 'ALL' : item.menu_name)} key={index} className='explore-items'>
                        <img className={ catogory === item.menu_name ? 'active' : ''} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu