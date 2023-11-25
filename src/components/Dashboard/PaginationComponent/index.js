import React from 'react';
import "./style.css";
import Pagination from '@mui/material/Pagination';

const PaginationComponent = ({page , handlePageChange}) => {

  return (
    <div className='pagination'>
      <Pagination count={20} page={page} onChange={(event , value)=>handlePageChange(event , value)} 
      sx={{
        color: "var(--white)",
        "& .Mui-selected ": {
          backgroundColor: "var(--gray) !important",
          color: "var(--blue) !important",
          borderColor: "var(--blue) !important",
          
        },
        "& .MuiPaginationItem-ellipsis": {
          border: "0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text": {
            fontSize:"1.6rem",
            fontFamily:"'Fira Sans', sans-serif;",
            color: "var(--white)",
          border: "1px solid var(--grey)",
        },
      }}
      />
      </div>
  );
}

export default PaginationComponent;