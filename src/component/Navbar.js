import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
function Navbar(){
    return(
        
            <nav className="nav-bar">
                <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                <Link to="/lovecount">Love Count</Link>
                <Link to="/appreciate">Appreciate</Link>
                <Link to="/bucketlist">BucketList</Link>
                <Link to="/music">Music</Link>
                <Link to="/aboutus">About Us</Link>
                

            </nav>
    )
}
export default Navbar;