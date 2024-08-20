import React, {useState , useEffect } from 'react'
import './coins.css'
import axios from 'axios'
import Coinsitem from './Coinsitem'


const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

const Coins = () => {

    const [coins, setCoin] = useState([])

    const handleCoinfetch = () => {
        axios.get(url).then((res) => {
            console.log(res);
            setCoin(res.data)
            console.log(coins);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        handleCoinfetch()
    }, [])


    return (
        <div className='coin-header'>
            
            <h2>Authorized Coins with current rate</h2>
            <div className='table-header'>
                <ul>
                    <li>#</li>
                    <li>Coin</li>
                    <li>Price</li>
                    <li>24h</li>
                    <li>Volume</li>
                    <li>Mkt Cap</li>
                </ul>
            </div>

            {
                coins.map((coin) => {
                    return <Coinsitem singleCoin={coin} key={coin.market_cap_rank} />;
                })
            }


        </div>
    )
}

export default Coins