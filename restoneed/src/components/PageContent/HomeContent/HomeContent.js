import React from 'react'
import img1 from '../../../images/menuscan.png'
import img2 from '../../../images/din.png'
import img3 from '../../../images/RestoSol/res1.jpg'
import img4 from '../../../images/RestoSol/res2.jpeg'
import img6 from '../../../images/RestoSol/res3.jpeg'
import img7 from '../../../images/RestoSol/join.png'
import img8 from '../../../images/RestoSol/join2.jpeg'
import './HomeContent.css'
import HomeFeatures from './HomeFeatures'
import './HomeContent.css'
import HomeForm from './HomeForm'
import Footer from '../../Footer/footer'

const HomeContent = () => {
    return (
        <>
            <section className="home-section">
                <div className="home-wel">
                    <div ><p>Welcome to <span className="home-wel-heading">Restoneed</span></p></div>
                    <h2 className="head">Savor delicious meals <br /><span className='head1'>Trust us with tech</span></h2>
                    <h6 className='open'>   Boost potential: Go digital for restaurant orders</h6>
                    <div>
                        <button>  Free trial available</button>
                        <button className='btn2'>  Visit our channel </button>

                    </div>
                </div>

                <div className="image-content">
                    <img src={img1} alt="homeImg" />

                </div>
            </section>

            <hr />

            <section className='home-section1'>
                <div className="img2">
                    <img src={img2} alt="img2s" />
                </div>

                <div className='info'>
                    <h1>Restoneeds Effortless Table Ordering</h1>

                    <p>
                        Welcome to RestoNeed! Here, tables turn into canvases, and every meal is a tasty masterpiece.RestoNeed is more than just a spot to eat; it's a journey of flavors and a cheerful celebration of good food.
                        <br /> <br />
                        Our story :kicked off because we love bringing folks together through the joy of delicious meals – making it simple and enjoyable for everyone.
                        <br /><br />
                        Our team is a mix of food enthusiasts and tech lovers. Together, we put in the effort to make your table a special stage for a delightful food experience. From selecting fresh ingredients to making ordering a breeze, we aim to make every visit easy and delightful.
                        <br /><br />
                        Our Vision:
                        Join us in dreaming of a world where every meal is like a flavor fiesta. Picture a place where technology makes things better, yet the simple joy of savoring tasty moments with friends and family remains at the heart of it all.

                    </p>
                </div>


            </section>


            <HomeFeatures />

            <section className='home-section3'>


                <h2>Custom Solutions for Restaurants</h2>

                <div className="resto">

                    <p>We have solutions for different restaurants. We make things easy for singlebr
                        <br />
                        restaurants or big chains. Check out how we can help your restaurant.</p>
                </div>

                <p>Scan the menu effortlessly, then place orders for your favorites with ease</p>
                <div className="resto-sols">
                    <div className="resto-sol">
                        <img src={img3} alt="hotel" />
                        <h3> Cafes </h3>
                        <p>Charming Coffee and Treats</p>
                    </div>
                    <div className="resto-sol">
                        <img src={img4} alt="cafe" />
                        <h3> Restaurants</h3>
                        <p>Diverse Dining Experiences</p>
                    </div>
                    <div className="resto-sol">
                        <img src={img6} alt="bar" />
                        <h3>Ice Cream Park </h3>
                        <p>Scoops of Sweet Delight</p>
                    </div>
                </div>


            </section>

            <h2 className='letsstart'>#Let's Begin Together</h2>
            <section className="home-section4">

                <div className="home-section4-box">
                    <div className="home-section4-img">
                        <img src={img7} alt="join-us" />
                    </div>
                    <div class="home-section4-details">
                        <h4>Discover the power of this cutting-edge technology.</h4>
                        <p>Lets try fist ,Understand how it works, then  <br /> become our first member after<br />experiencing the scanner firsthand  <span style={{ color: "blue", cursor: "pointer" }}> read more...</span>
                        </p>


                    </div>

                </div>

                <div className="home-section4-box">
                    <div className="home-section4-img">
                        <img src={img8} alt="join-us" />
                    </div>
                    <div class="home-section4-details">
                        <h4>Let's initiate the Scanner cycle from either end.</h4>
                        <p>Together, we put in the effort to make your table a special <br /> stage for a delightful food experience
                            From selecting fresh ingredients to making ordering a breeze <br />we aim to make every visit easy and delightful
                            <span style={{ color: "blue", cursor: "pointer" }}> read more...</span>
                        </p>

                    </div>

                </div>

            </section>
            <hr />





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









        </>
    )
}

export default HomeContent
