import React from 'react'
import './coins.css'

const Coinsitem = ({singleCoin}) => {
  return (
    <div className='coin-header'> 
            <div className='table-header container'>
                <ul>
                    <li>{singleCoin.market_cap_rank}</li>
                    <li><img src={singleCoin.image} /> {singleCoin.symbol}</li>
                    <li>${singleCoin.current_price}</li>
                    <li>{singleCoin.price_change_percentage_24h.toFixed(2)}%</li>
                    <li>${singleCoin.total_volume}</li>
                    <li>${singleCoin.market_cap}</li>
                </ul>
            </div>
       
        </div>
  )
}

export default Coinsitem