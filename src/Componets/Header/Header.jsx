import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import ExploreMenu from '../ExploreMenu/ExploreMenu'



const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia numquam laboriosam doloremque molestias doloribus laborum nesciunt, aspernatur ipsa consequuntur aperiam modi eaque perferendis quisquam dicta nisi cum quaerat temporibus.</p>
            <a href='#menu' ><button>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header