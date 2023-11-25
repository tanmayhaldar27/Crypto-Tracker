import React from 'react';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Compare from './pages/Compare';
import Watchlist from './pages/Watchlist';
import CoinPage from './pages/Coin';

function App() { 
  
  return (
    <div className="App" >

    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/compare' element={<Compare />}/>
      <Route path='/coinPage/:id' element={<CoinPage />}/>
      <Route path='/watchlist' element={<Watchlist />}/>

    </Routes>
    {/* <button onClick={toggleTheme}>"Theme Mode"</button> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
