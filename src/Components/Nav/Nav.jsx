import React from 'react'
import "./nav.css"
import { FaBitcoin } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";


const Nav = () => {
  return (
    <div className='nav-section'>
    <FaBitcoin className='bit-icon' />
    <h1 className='coins'>Coins</h1>
    <nav>
       
        <ul>
        <li>About <FaArrowRight /> </li>
        <li>Auth Coin <FaArrowRight /> </li>
        </ul>
       
    </nav>

    <div className='ham-bugger'>
    <RxHamburgerMenu className='ham-icon' />
    </div>
</div>
  )
}

export default Nav