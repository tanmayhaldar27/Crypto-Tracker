import React, { useState } from 'react'
import "./style.css";

const Coin = ({heading , desc}) => {
    const [flag, setFlag] = useState(false);

    const shortDesc =desc ? desc.slice(0 , 400) + "<span> read more...</span>" : "";
    const longDesc = desc ? desc+ "<span> read less...</span>" : "";
  return (
    <div className='CoinInfo'>
        <h2>{heading}</h2>
        <p onClick={()=>setFlag(!flag)} className='coinInfoDesc' dangerouslySetInnerHTML={{__html: !flag ? shortDesc : longDesc}} />
    </div>
  )
}

export default Coin;