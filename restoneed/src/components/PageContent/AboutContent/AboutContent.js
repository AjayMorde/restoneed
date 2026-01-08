import React from 'react';
import './AboutContent.css';
import img1 from './images/a2.png'
import Footer from '../../Footer/footer';
import HomeForm from '../HomeContent/HomeForm';
const AboutContent = () => {
    return (
        <>
            <section id="page-header" className="about-header">
          
                <h2>#Get to Know Us</h2>
                <p>Your presence as we explore the forefront of technology is highly valued</p>


            </section>

            <section id="about-head" className="section-p1">
                <img src={img1} alt="" />
                <div>
                    <h1>Who we are?</h1>
                    <p>
                       
                   RestoNeed stands as a prominent provider of comprehensive technology solutions tailored for
                    a diverse range of dining establishments, including Restaurants, Bars, Cafés, QSRs, Ice-cream
                     Shops, Bakeries, and Cake Shops. Our cloud-based platform offers end-to-end solutions, catering
                      to the needs of all food businesses, be it a single food outlet or an extensive restaurant chain.
                       RestoNeed is committed to assisting and enhancing the operations of various food establishments, 
                       irrespective of their scale
                    </p>
                    <abbr title="">
                        
                        RestoNeed: Revolutionizing Dining Tech. Elevate Your Culinary Journey with Seamless Solutions.
                        Empowering Restaurants for Success.
                    </abbr>
                    <br />
                    <br />

                </div>
            </section>

            <section id="form-details">
      <form action="">
        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear from you</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="text" placeholder="Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
        <button className="normal">Submit</button>
      </form>
      <div className="people">
        
      <p className='agency'>Connect with the our community.</p>
        <div>
          <img  src="./img/contactImg/am.jpg" alt="" /><br />
          <p>
            <span>Name LastName</span>
            <br />
            Phone-8517435656
            <br />
            Email-help@restoneed.com
          </p>
        </div>
        <div>
          <img  src="./img/contactImg/sd.jpg" alt="" /><br />
          <p>
            <span>Name LastName</span>
            <br />
            Phone-8517435656
            <br />
            Email-help@restoneed.com
          </p>
        </div>
        <div>
          <img  src="./img/contactImg/sp.jpg" alt="" /><br />
          <p>
            <span>Name LastName</span>
            <br />
            Phone-8517435656
            <br />
            Email-help@restoneed.com
          </p>
        </div>
      </div>
    </section>
    (
    <section id="contact-details" className="section-p1">
      <div className="details">
        <span>GET IN TOUCH</span>
        <h2>Visit one of our locations or contact us today</h2>
        <h3>Head Office</h3>
        <div>
          <ul>
            <li>
              <i className="fal fa-map"></i>
              <p>sr no 79, Hadapsar, Pune, Maharashtra 411028</p>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>help@restoneed.com</p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>+91 7517537095 / +91 8265072217</p>
            </li>
            <li>
              <i className="far fa-clock"></i>
              <p>Monday to Saturday: 9 am to 16 pm</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15134.359959118443!2d73.90660084490338!3d18.
          502222180115055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1628a0562a7%3A0xc55471931ae4b57e!2sSavitri%20Bungalow!5e0!3m2!1sen!2sin!4v1683176264019!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
     <div className="dis">
     <HomeForm ></HomeForm>
     </div>
    
  
    <Footer></Footer>



        </>
    )
}

export default AboutContent
