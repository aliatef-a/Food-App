import React, { useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'


const Login = ({setLogin}) => {

    const [currState , setCurrState] = useState('Login')
  return (
    <div className='login'>
        <form className="login-container">
            <div className="login-title">
                <h2>{currState}</h2>
                <img onClick={()=> setLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inputs">
                {currState === 'Sign up' ? <input type="text" placeholder='Enter Your Name' required/> : null }
                <input type="email" placeholder='Enter Your Emai' required/>
                <input type="password" placeholder='Enter Your password' required />
            </div>
            <button>{currState === 'Sign up' ? 'Create account': 'Log in'}</button>
            <div className='login-condition'>
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy police. </p>
            </div>
            {currState === 'Login' ? 
            <p>Create a new account? <span onClick={() => setCurrState('Sign up')}>CliCk Here</span></p> 
            : <p>Already an account? <span onClick={() => setCurrState('Login')}>Login Here</span></p> }       
        </form>
    </div>
  )
}

export default Login