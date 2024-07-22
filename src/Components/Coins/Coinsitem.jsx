import React from 'react'
import './coins.css'

const Coinsitem = ({coin}) => {
  return (
    <div className='coin-header'> 
            <div className='table-header'>
                <ul>
                    <li>{coin.market_cap_rank}</li>
                    <li><img src={coin.image} /> {coin.symbol}</li>
                    <li>${coin.current_price}</li>
                    <li>{coin.market_cap_change_percentage_24h}%</li>
                    <li>${coin.total_volume}</li>
                    <li>${coin.market_cap}</li>
                </ul>
            </div>
       
        </div>
  )
}

export default Coinsitem