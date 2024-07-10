import React, { useState } from 'react'
import './home.css'
import Header from '../../Componets/Header/Header'
import ExploreMenu from '../../Componets/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Componets/Fooddisplay/FoodDisplay'
import AppDownload from '../../Componets/AppDownload/AppDownload'



const Home = () => {

  const [catogory , setCatogory ] = useState('ALL')
  return (
    <div>
      <Header/>
      <ExploreMenu catogory={catogory}  setCatogory ={setCatogory} />
      <FoodDisplay catogory ={catogory}/>
      <AppDownload/>
    </div>
  )
}

export default Home