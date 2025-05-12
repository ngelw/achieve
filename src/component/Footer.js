import React from "react";
import './Footer.css';
function Footer(){
    return(
        
        <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Email: contact@company.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="address-info">
            <h3>Our Address</h3>
            <p>1234 Street Name</p>
            <p>City, Country</p>
            <p>Zip Code: 12345</p>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <p>Facebook | Twitter | LinkedIn</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Company Name. All rights reserved.</p>
        </div>
      </footer>
    )
}
export default Footer;