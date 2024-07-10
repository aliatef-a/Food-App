import React from 'react'
import './appDownload.css'
import { assets } from '../../assets/assets'


const AppDownload = () => {
  return (
    <div className='AppDownload' id='AppDownload'>
        <p>For Better Experience Download  <br/> Food App</p>
        <div className='dawnlaod'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload