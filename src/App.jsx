import React, { useState } from 'react'
import Navbar from './Componets/nanbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Placeorder/PlaceOrder'
import Footer from './Componets/Footer/Footer'
import Login from './Componets/Login/Login'

const App = () => {
  const [login , setLogin] = useState(false);
  return (
    <>
    {login ? <Login setLogin={setLogin}/> : ''}
    <div className='app'>
      <Navbar setLogin = {setLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
