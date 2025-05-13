import React, { createElement } from 'react'
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import LoveCount from './features/LoveCount';
import Appreciate from "./features/Appreciate";
import BucketList from './features/BucketList';
import AboutUs from './component/AboutUs';
import HomePage from './component/Homepage';
import Music from './features/Music';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (

    <div className="App">
      <header className="App-header">
      <Navbar />
      <HomePage />
      <main>
      <Routes>
        <Route path="/lovecount" element={<LoveCount />} />
        <Route path="/appreciate" element={<Appreciate />} />
        <Route path="/bucketlist" element={<BucketList />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/achieve" element={<HomePage />} />
        <Route path='/music' element={<Music />} />
      </Routes>
      </main>
      
      {/* <LoveCount /> */}
      {/* <Footer /> */}
      </header>
      
    </div>

  );
}

export default App;
