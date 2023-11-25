import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import Loader from "../components/Common/Loader";
import emoji from "../assets/2004081.png"; 
import SearchBar from "../components/Dashboard/SearchBar";
import BackToTop from "../components/Common/BackToTop";
import PaginationComponent from "../components/Dashboard/PaginationComponent";
import Button from "../components/Common/Button";
import { get100Coins } from "../functions/get100Coins";
const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [error , setError] = useState("");
  const [loading , setLoading] = useState(true);
  const [search , setSearch] = useState("");
  const [page , setPage] = useState(1);
  const [paginatedCoins , setPaginatedCoins] = useState([]);

  useEffect(()=>{
    getData();
  },[]);

  const getData = async () => {
    const myCoins = await get100Coins();
    if(myCoins){
      setError("");
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0 , 15));
      setLoading(false);
      }
      else{
          setError("Something went wrong... Please try after sometime!!")
      setLoading(false);
      }
    };

    const  onSearchChange = (e) =>{
      setSearch(e.target.value);
    }
    
    var filteredCoins = coins.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()));

    const handlePageChange = (event , value) =>{
      setPage(value);
      var prevIndex = (value - 1 ) * 15;
      setPaginatedCoins(coins.slice(prevIndex, prevIndex + 15));
    }
      

  return (
    
    <>
    <Header />
    {loading? (<Loader />) : (
    <>
      <SearchBar search={search} onSearchChange={onSearchChange} />
      <div style={{ marginTop: "2rem" }}></div>
      { filteredCoins.length === 0 ? ( // Check if there are no filtered coins
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <img src={emoji} style={{ width: "20rem", marginTop: "2rem", opacity: ".7", textAlign: "center" }} alt="errorImg" />
          <p style={{ color: "var(--red)",opacity:".8" ,  textAlign: "center", fontSize: "2rem" , marginBottom:"2rem" }}>No coins found</p>
          <Button text={"Reset Search"} outline={true} onClick={()=>setSearch("")} />
        </div>
      ) : (
        <>
        
        <TabsComponent coins={search ? filteredCoins : paginatedCoins} setSearch={setSearch}/>
        {error && 
          <div style={{display:"flex" , flexDirection:"column",justifyContent:"center" , alignItems:"center"}}>
            <p style={{color:"var(--red)" , textAlign:"center" , fontSize:"2rem"}}>{error}</p>
            <img  src={emoji} style={{width:"20rem" , marginTop:"2rem", opacity:".7" , textAlign:"centre"}} alt="errorImg"/>
          </div>
        }
        {
          !search && (
            <PaginationComponent page={page} handlePageChange={handlePageChange} />
          )
        }
        </>
        
      )}
       
    </>
    
    )}
    <BackToTop />
    </>
  );
};

export default Dashboard;
