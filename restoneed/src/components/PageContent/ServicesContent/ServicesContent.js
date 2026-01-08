import React from 'react';
import './ServicesContent.css';
import img1 from './images/staffservics.png';
import img2 from './images/workersimg.png';
import img3 from './images/cusimg3.png';
import img4 from './images/Owenerimg.jpeg';
import HomeForm from '../HomeContent/HomeForm';
import Footer from '../../Footer/footer';

const ServicesContent = () => {
    return (
        <div>
            <section className="servicesHead" >

                <h2>#Know Our Services</h2>



            </section>

            <h1 id='scanner'>

                Scanner Functionality Overview
            </h1>

            <div className='staff'>
                <div>

                    <h1>
                        Dynamic Scanner
                    </h1>


                    <p>
                        At Restoneed, we're excited about making your dining experience special. Our Dynamic Scanner is
                        a cool way we do that. Unlike regular menus that stay the same, our Dynamic Scanner updates every
                        5 minutes. This is awesome for both you and the hotel staff because
                    </p>


                    <h1>
                        Explore the Complete Menu
                    </h1>
                    <p>
                        Discover all the tasty options on our menu right here! From delicious dishes to detailed descriptions,
                        explore a world of flavors tailored just for you. Start your food adventure now!
                    </p>

                    <h1>
                        Reviews and Feedbacks
                    </h1>
                    <p>
                        iscover what people think about our food by checking out reviews. Share your own thoughts
                        about each dish to help others decide what to try. Your opinions are important in shaping
                        our food community
                    </p>

                    <h1>
                        ChatBot
                    </h1>
                    <p>
                        Introducing our chatbot, your friendly guide to all things food! Ask it anything, from describing
                        the taste to spiciness levels, and it'll provide detailed information about each dish. Let the
                        hatbot be your food companion, offering insights into the flavors that make your dining experience
                        extraordinary!
                    </p>

                </div>
                <div className='serimg'>
                    <img src={img1} alt="" />
                </div>

            </div>
            <h1 id='scanner'>

                Worker/Staff Benefits
            </h1>

            <div className='staff-benifits'>

                <div id='staffimg'>
                    <img src={img2} alt="" />
                </div>

                <div id='staff-benifits-list'>

                    <ul>
                        <li>Effortlessly take orders online</li>
                        <li>Efficient token management expedites the dispatch of online orders</li>
                        <li>nventory stock management</li>
                        <li>Easy to use</li>
                        <li>Display information in a table format with options for splitting, switching, and merging</li>
                        <li>Multiple-language options</li>
                        <li>Software Training</li>
                        <li>Enable digital order-taking for your staff with Captain Ordering</li>
                        <li>Finally Send E-bill via SMS</li>
                    </ul>

                </div>

            </div>

            <h1 id='scanner' className='ben'>

                Great customer Services
            </h1>

            <div className='staff-benifits ben' id='staffsupports'>

                <div id='cusimg2'>
                    <img src={img3} alt="staff-benifits" />
                </div>

                <div id='staff-benifits-list' className='cus-list'>

                    <ul>
                        <li>Effortless Ordering with Menu Scanner:</li>
                        <li>Watch Each Food's Reviews</li>
                        <li>Our platform is designed to cater to diverse linguistic preferences. </li>
                        <li>Provide Feedback and Share Your Experien.Share your thoughts about our services and  </li>
                        <li>Taste Before You Order:</li>
                        <li>Support for All Languages:</li>
                        <li>Transparent Pricing and Rates:</li>
                        <li>Dynamic Menu with Real-Time Updates</li>
                        <li>Easy-to-Navigate Interface</li>
                        <li>Multi-Currency Support</li>
                    </ul>

                </div>




            </div>


            <h1 id='scanner' className='ben'>

                Customized  services for owner
            </h1>


            <div className='staff-benifits ben  ' id='staffsupports' >

                <div id='cusimg2' className='owner' >
                    <img src={img4} alt="staff-benifits" />
                </div>

                <div id='staff-benifits-list' className='cus-list'>

                    <ul>
                        <li>Efficient expense tracking for restaurant owners</li>
                        <li>Daily insights into restaurant expenses</li>
                        <li>Optimized operational efficiency leading to a decreased need for staffing in the hotel .</li>
                        <li>Streamlined benefits management</li>
                        <li>Comprehensive hotel necessities</li>
                        <li>Real-time food inventory updates</li>
                     
                        <li>Reduced staff requirements for the hotel</li>
                        <li>Proactive decision-making guidance</li>
                        <li>Opportunity to add owner's ideas</li>
                    </ul>

                </div>




            </div>


          <HomeForm></HomeForm>

          <section className="home-section6">
                <div className="newstext">
                    <h4>
                    Initiate Your journey with RestoNeed
                    </h4>
                    <p>
                    Let's arrange a time for a  <span>quick call.</span>
                    </p>

                </div>
                <div className="form">
                    <input type="tel" placeholder="+91" />
                    <button className="normal">Send now</button>
                </div>
            </section>

            <Footer></Footer>


        </div>
    )
}

export default ServicesContent
