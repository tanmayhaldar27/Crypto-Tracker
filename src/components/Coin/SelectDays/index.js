import React from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SelectDays({handleDaysChange,days ,noPTag}) {

  return (
    <div className="selectDays" style={{paddingBottom:"1rem !important"}}>    
        {!noPTag && <p>Price Change In</p>}   
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={(e)=>handleDaysChange(e)}
          sx={{
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
          }}
        >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>

        </Select>
        </div>

  );
}