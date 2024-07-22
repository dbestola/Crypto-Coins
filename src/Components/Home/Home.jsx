import React from 'react'
import IMAGE from '../../assets/bitcoin-image.jpg'
import '../Home/home.css'
import Coins from '../Coins/Coins' 
import { TypeAnimation } from 'react-type-animation';

const home = () => {
  return (
    <>
    <div className='home-display'>
    <div className='welcome-address'>

    <TypeAnimation
      sequence={[
        'Welcome', // Types 'One'
        1000, // Waits 1s
        'Dbest', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Dbest ola', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />


        <h3 style={{fontWeight:600}}> BLOCK CHAIN WEBSITE </h3>
        <h3 style={{fontWeight:100}}> A PLATFORM WHERE </h3>
        <h3 style={{fontWeight:100}}> YOU CAN TRADE</h3>
        <h3 style={{fontWeight:100}}> ALL COINS</h3>
    </div>

    <div className='image-container'>
    <img alt='bit-image' src={IMAGE}/>
    </div>
   
    </div>
   
    <Coins/>
    </>
  )
}

export default home