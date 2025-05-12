import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        
            <nav className="nav-bar">
                <img src="/logo.png" className="App-logo" alt="logo" />
                <Link to="/lovecount">Love Count</Link>
                <Link to="/appreciate">Appreciate</Link>
                <Link to="/bucketlist">BucketList</Link>
                <Link to="/aboutus">About Us</Link>
                

            </nav>
    )
}
export default Navbar;