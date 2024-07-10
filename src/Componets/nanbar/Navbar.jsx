import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/Context'



const NavBAr = ({ setLogin }) => {

  const [navLine, setnavLine] = useState('Home')
  const {getTotal} = useContext(StoreContext);



  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setnavLine('Home')} className={navLine == 'Home' ? 'active' : ''}>Home</Link>
        <a href='#menu' onClick={() => setnavLine('Menu')} className={navLine == 'Menu' ? 'active' : ''}>Menu</a>
        <a href='#AppDownload' onClick={() => setnavLine('Mobile App')} className={navLine == 'Mobile App' ? 'active' : ''}>Mobile App</a>
        <a href='#footer' onClick={() => setnavLine('Contact')} className={navLine == 'Contact' ? 'active' : ''}>Contact</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          {getTotal() > 0 ? <div className="dot"></div> : null}
           
          
        </div>
        <button onClick={() => setLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default NavBAr