import React,{useEffect, useState} from "react";
import "./style.css";
import {Select} from "@mui/material";
import {MenuItem}  from "@mui/material";
import {get100Coins} from "../../../functions/get100Coins";
 const SelectCoins = ({crypto1,crypto2, handleCoinChange }) => {
    const [allCoins , setAllCoins] = useState([]);
    const styles = {
        height: "2.5rem",
        color: "var(--blue)!important",
        
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--blue)!important",
        },
        "& .MuiSvgIcon-root": {
          color: "var(--blue)!important",
        },
        "&:hover": {
          "&& fieldset": {
            borderColor: "#3a80e9",
          },
        },
      }

      useEffect(()=>{
        getData();
      },[])

      async function getData() {
        const myCoins = await get100Coins();
        setAllCoins(myCoins);
      }

  return (
    <div className="coins-flex">
    <div style={{marginRight:".8rem" , display:"flex" , alignItems:"center", gap:"1rem"}}> 
       <p>Crypto 1</p>
      <Select
        value={crypto1}
        label="Crypto 1"
        onChange={(e)=>handleCoinChange(e)}
        sx={styles}
      >
        {
            allCoins?.filter((item)=> item.id !== crypto2).map((coin , i)=>(
                <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
            ))
        }
      </Select>
     </div>
     <div style={{ display:"flex" , alignItems:"center", gap:"1rem"}}>
      <p>Crypto 2</p>
      <Select
        value={crypto2}
        label="Crypto 2"
        onChange={(e)=>handleCoinChange(e , true)}
        sx={styles}
      >
        {
            allCoins?.filter((item)=> item.id !== crypto1).map((coin, i)=>(
                <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
            ))
        }
      </Select>
     </div>
    </div>
  );
};

export default SelectCoins;
