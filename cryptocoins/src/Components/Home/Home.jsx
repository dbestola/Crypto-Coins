import React from 'react'
import IMAGE from '../../assets/bitcoin-image.jpg'
import '../Home/home.css'

const home = () => {
  return (
    <>
    <div className='home-display'>
    <div className='welcome-address'>
        <h3> BLOCK CHAIN WEBSITE</h3>
        <h3 style={{fontWeight:100, color: 'orangered'}}> A PLATFORM WHERE </h3>
        <h3 style={{fontWeight:100, color: 'orangered'}}> YOU CAN TRADE</h3>
        <h3 style={{fontWeight:100, color: 'orangered'}}> ALL COINS</h3>
    </div>

    <div className='image-container'>
    <img alt='bit-image' src={IMAGE}/>
    </div>

    </div>
    </>
  )
}

export default home