import React, { useState } from 'react'
import "./style.css";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import {motion, useScroll} from "framer-motion";
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/Star';
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchList";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";

const Grid = ({coin , key}) => {
const watchlist = JSON.parse(localStorage.getItem("watchlist"));
const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));
   
  return (
    <Link to={`/coinPage/${coin.id}`}>
    <div className='mainGrid' >
        <motion.div initial={{y:1, opacity:0}} animate={{y:0 , opacity:1}} className={`${coin.price_change_percentage_24h < 0 ? "gridContainer redBox" : "gridContainer greenBox"}`}  key={key} >
        <div className='coinLogo'>
        <div style={{display:"flex", gap:"1rem"}}>
        <img src={coin.image} style={{width:"4.5rem"}} alt='coin-logo' />
         <div className='coinName'>
          <p>{coin.symbol}-USD</p>
          <p>{coin.name}</p>
        </div>
        </div>
        <div
              className={`watchlist-icon ${
                coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
              }`}
              onClick={(e) => {
                if (isCoinAdded) {
                  // remove coin

                  removeItemToWatchlist(e, coin.id, setIsCoinAdded);
                } else {
                  setIsCoinAdded(true);
                  alert("Coin added to watchList")
                  saveItemToWatchlist(e, coin.id);
                }
              }}
            >
              {isCoinAdded ? <StarIcon style={{fontSize:"1.8rem"}} /> : <StarOutlineIcon style={{fontSize:"1.8rem"}} />}
            </div>
        </div>

        {
            coin.price_change_percentage_24h > 0 ? (
            <div className='coinPercent green'>
                <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                <p><TrendingUpIcon /></p>
            </div>
            ) : (
            <div className='coinPercent red'>
                <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                <p><TrendingDownIcon /></p>
            </div>
            )
        }
       
       {
        coin.price_change_percentage_24h > 0 ?(
            <div className='coinPrice greenPrice'>
            <p>${coin.current_price.toLocaleString()}</p>
        </div>
        ) : (
            <div className='coinPrice redPrice'>
            <p>${coin.current_price.toLocaleString()}</p>
        </div>
        )
       }     

        <div className='coinMarket'>
            <p>Total Volume : <span className='marketPrice'> ${coin.total_volume.toLocaleString()}</span></p>
            <p>Market Cap : <span className='marketPrice'>${coin.market_cap.toLocaleString()}</span></p>
        </div>
        </motion.div>
    </div>
    </Link>
  )
}

export default Grid;