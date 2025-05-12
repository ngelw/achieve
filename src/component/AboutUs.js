import React from "react";
import "./AboutUs.css"
function AboutUs(){
    return(
        <>
        <section class="about-section">
    <div class="container">
      <h1 class="about-title">About Us</h1>
      <p class="about-description">
      I created this project to help us achieve more through the power of love. 
      It offers positive reminders that encourage us to consciously remember our loved ones, 
      appreciate them, and feel happy in the process. 
      </p>
      <div class="team-section">
        <h2 class="team-heading">Meet The Developer</h2>
        <div class="team-cards">
          <div class="team-card">
            <img src="/profile.png" alt="Alice" class="team-img"/>
            <h3>Angel</h3>
            <p>CS Undergraduate</p>
            <p>Freshman</p>
          </div>
         
        </div>
      </div>
    </div>
  </section>
  <div className="contact-container">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="contact-info">
          <div className="contact-item">
            <h2>Email</h2>
            <p>
              <a href="mailto:info@example.com">angelshrestha2024@gmail.com</a>
            </p>
          </div>
          {/* <div className="contact-item">
            {/* <h2>Phone</h2>
            <p>
              <a href="tel:+1234567890">+1 234 567 890</a>
            </p>
          </div> */}
          <div className="contact-item"> 
            <h2>Address</h2>
            <p>Arlington,TX</p>
          </div>
        </div>
      </div>
        </>
    )
}
export default AboutUs;