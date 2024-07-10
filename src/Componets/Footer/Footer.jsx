import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'




const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, accusamus officia voluptatem animi aliquid autem architecto quisquam excepturi perferendis voluptas. Inventore tempora sapiente repudiandae, adipisci accusantium temporibus possimus explicabo!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Priavcy and Police</li>
                </ul>
            </div>
            <div className="footer-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+132656</li>
                    <li>Contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 - Developer by ALi Atef
        </p>
    </div>
  )
}

export default Footer