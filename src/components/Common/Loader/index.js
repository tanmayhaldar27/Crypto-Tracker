import React from 'react';
import "./style.css";
import { CircularProgress } from "@mui/material";
const Loader = () => {
  return (
    <div className='loader'>
        <CircularProgress style={{color:"var(--blue)"}} />
    </div>
  )
}

export default Loader