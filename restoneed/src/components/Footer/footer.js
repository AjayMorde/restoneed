import React from 'react';
import './footer.css'
// import logo from './img/restologo.png'
// import playstore from './img/play.jpg'
import works from './img/works.png'
// import app from './img/app.jpg'
import '@fortawesome/fontawesome-free/css/all.css';
import logo from  './img/restologo2.png'

const Footer = () => {
  return (
    <div>
      <footer className="section-p1">
        <div className="col">
          <img className="logo1" src={logo} alt="" />
          <h4>Contact</h4>
          <p><strong>Address:</strong> Pune ,Hadpsar-413002</p>
          <p><strong>Phone:</strong> +91 987654321</p>
          <p><strong>Hours:</strong> 10:00 - 18:00, Mon-Sat</p>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon" >
             
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href=" #">About</a>
          <a href=" #">Contact-us</a>
          <a href=" #">Our services</a>
          <a href=" #">Our presence</a>
          <a href=" #">Feedback</a>
         
        </div>
        <div className="col">
          <h4>Explore</h4>
          <a href=" #">Why RestoNeed</a>
          <a href=" #"> Staff Benifits</a>
          <a href=" #">Tech Works</a>
          <a href=" #">Support Team</a>
          <a href=" #">FAQs</a>
        </div>
        <div className="col install">
          
          <p>Our team is working on</p>
          <img src={works} alt="Payment Gateways" />
        </div>
        <div className="copyright">
          <p>© 2023-24 All Rights Reserved. Powered by RestoNeed </p>
        </div>
       
      </footer>
    </div>
  );
};

export default Footer;
