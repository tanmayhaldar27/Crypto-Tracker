import React from 'react'
import "./style.css";
const Button = ({text , onClick , outline}) => {




  return (
    <div className={outline? "outLine-button" : "button"} onClick={()=>onClick()}>
        {text}
    </div>
  )
}

export default Button