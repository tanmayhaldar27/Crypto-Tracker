import React,{useState , useEffect} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Button from "../Button";
import TemporaryDrawer from "./drawer";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () => {
  const initialTheme = localStorage.getItem("theme") || "dark";
  const [theme , setTheme] = useState(initialTheme);

  const handleTheme = () =>{
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
   }
  useEffect(()=>{
    document.body.className = theme;
  },[theme]);
  return (
    <div className="header">
      <Link className="headerLogo" to="/">
        CryptoTracker<span>.</span>
      </Link>

      <div className="headerLinks">
        <div className="toggleDiv"  onClick={handleTheme}>
          {
            (theme === 'light') ? (<div title="Switch to Night" className="lightDiv" id="lightDiv"><div><DarkModeIcon style={{color:"#360568" ,fontSize:"2rem"}} /></div></div>) : (<div  title="Switch to Morning" className="darkDiv" id="darkDiv" ><div><LightModeIcon style={{color:"yellow" ,fontSize:"2rem"}}/></div></div>)
          }  
        </div>
        <Link to="/">Home</Link>
        <Link to="/compare">Compare</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/dashboard" className="dashboardbutton">
          <Button text={"Dashboard"} onClick={() => console.log("Prajwal")} />
        </Link>
      </div>
      <div className="mobileDrawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
