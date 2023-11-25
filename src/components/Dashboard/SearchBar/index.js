import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./style.css";
const SearchBar = ({search , onSearchChange }) => {

  return (
    <div className='searchBar'>
        <SearchIcon style={{fontSize:21}}/>
        <input type='text' placeholder='Search' value={search} onChange={(e)=>onSearchChange(e)} />
    </div>
  )
}

export default SearchBar;