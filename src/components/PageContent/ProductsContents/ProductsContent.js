import React from 'react'
import './ProductContent.css';
import img1 from './images/p1.png'
import img2 from './images/p2.png'
import img3 from './images/p3.png'
import img4 from './images/p4.png'
import img5 from './images/p7.png'
import img6 from './images/p10.png'
import img7 from './images/p11.png'
import img8 from './images/p12.png'
import Footer from '../../Footer/footer';

const ProductsContent = () => {
    return (
        <div>
            <section className="product_banner" >





            </section>

            <h1 className='qrcode'>QR Code Ordering and Payment</h1>

            <p className='qrcode1'>
                Simply scan the QR code, key in the table number, order and pay.
                The order goes straight into the kitchen for production.
            </p>

            <div className='prodct_prop'>
                <div>

                    <img src={img1} alt="" />
                    <p>Safe ordering for customers </p>

                </div>

                <div>
                    <img src={img2} alt="" />
                    <p className='p2'>Fully integrated for Staff and owners</p>
                </div>

                <div>
                    <img src={img3} alt="" />
                    <p className='p2'>Access full menu via QR code</p>

                </div>

                <div>
                    <img src={img4} alt="" />
                    <p>Secure online payments</p>
                </div>

            </div>

            <div id='restointegrating'>
                <div id='intreprop'>
                    <p>Improve operational efficiency</p>
                    <h2>
                        Fully integrated with RestoNeed :- <span>Orders go straight into the RestoNeedPOS  <br /> and kitchen for production</span>
                    </h2>
                    <h2>
                        Control the Dine-in Menu offering :- <span>Have different prices for takeaway items vs dine in</span>
                    </h2>
                    <h2>
                        Control Item availability on the Menu :- <span> Using the recently released Item availability <br /> functionality, set items to Sold Out when you run out to avoid disappointment and uncomfortable conversations</span>
                    </h2>
                    <h2>
                        Synchronised menu :-  <span> Product images - show customers your delicious meals with hi-res images</span>
                    </h2>

                </div>
                <div>

                    <img src={img5} alt="p7image" />

                </div>

                <br /><br />

            </div>
            <p className='working'>How it works</p>
            <br />
            <div id='working1'>
                <div>
                    <img src={img6} alt="" />
                    <p>Scan your table QR code <br /> to view the menu</p>
                </div>
                <div>
                    <img src={img7} alt="" />
                    <p>Order your food, drinks and pay</p>
                </div>
                <div>
                    <img src={img8} alt="" />
                    <p>Enjoy your food and drinks </p>
                </div>
            </div>

            <div className='action'>
                
                <h1 id='action1'>See RestoNeed in action!</h1>
                <p id='paction'>Talk to one of our team of experts and get a demo</p>
                <button id='actionbutton'>Get A Demo</button>
            </div>

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

export default ProductsContent
