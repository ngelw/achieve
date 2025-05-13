import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        
            <nav className="nav-bar">
                <Link to="/achieve"><img src="../assets/logo.png" className="App-logo" alt="logo" /></Link>
                <Link to="/lovecount">Love Count</Link>
                <Link to="/appreciate">Appreciate</Link>
                <Link to="/bucketlist">BucketList</Link>
                <Link to="/music">Music</Link>
                <Link to="/aboutus">About Us</Link>
                

            </nav>
    )
}
export default Navbar;