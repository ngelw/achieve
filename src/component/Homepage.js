import React from "react";
import "./Homepage.css"
import { Link } from "react-router-dom";
function HomePage() {
    return(
        <div className="home-container">
      <h1 className="home-title">Achieve More With Love</h1>
      <p className="home-description">
        This project is built to inspire you through love. 
        By cherishing those who matter, we unlock motivation, peace, and clarity to pursue our goals.
      </p>
      <div className="home-buttons">
        <Link to="/lovecount" className="home-btn">Start Loving</Link>
        <Link to ="/appreciate" className="home-btn">Show Appreciation</Link>
        <Link to="/bucketlist" className="home-btn">Bucket List</Link>
      </div>
      <br></br>
      <p className="home-description">Click the <strong>Buttons</strong> to perform affirmative conscious actions to radiate your love.
      <br></br>Press the <strong>NavBar</strong> Icons to come back to the homepage or travel to different section.</p>
    </div>
    )

}
export default HomePage;