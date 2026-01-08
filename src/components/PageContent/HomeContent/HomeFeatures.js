import React from 'react'
import fe1 from '../../../images/features/f1.png'
import fe2 from '../../../images/features/f2.png'
import fe3 from '../../../images/features/f3.png'
import fe4 from '../../../images/features/f4.png'
import fe5 from '../../../images/features/f5.png'
import fe6 from '../../../images/features/f6.png'
const HomeFeatures = () => {
  return (
    <div>
       <section className='home-section2'>
        <div className="fe-box">
            <img src={fe1} alt="1" />
            <h6>Effortless Table Ordering</h6>
        </div>
        <div className="fe-box">
            <img src={fe2}  alt="2" style={{ width:"110px" , height:'110px'}}/>
            <h6>DishDigest Reviews</h6>
        </div>
        <div className="fe-box">
            <img src={fe3} alt="3"/>
            <h6>Instant Confirmation</h6>
        </div>
        <div className="fe-box">
            <img src={fe4} alt="4" style={{ width:"110px" , height:'110px'}}/>
            <h6>Quick Table Service</h6>
        </div>
        <div className="fe-box">
            <img src={fe5} alt="5"/>
            <h6>Interactive Menu</h6>
        </div>  
        <div className="fe-box">
            <img src={fe6} alt="6"/>
            <h6>F24/7Support</h6>
        </div>
    </section>
    </div>
  )
}

export default HomeFeatures
