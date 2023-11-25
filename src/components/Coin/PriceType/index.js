import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./style.css";

export default function PriceType({ priceType ,  handlePriceTypeChange}) {
 
  return (
    <div className='togglePrice'>   
     <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      aria-label="text alignment"
      sx={{
        "&.Mui-selected": {
          color: "var(--blue) !important",
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid var(--blue)!important",
          borderColor: "unset",
          color: "var(--blue) !important ",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--blue) !important",
        },
      }}
    >
      <ToggleButton value="prices" className='toggleBtn' >Prices
      </ToggleButton>
      <ToggleButton value="market_caps" className='toggleBtn'>Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes" className='toggleBtn'>Total Volume
      </ToggleButton>
    </ToggleButtonGroup>
    </div>

  );
}