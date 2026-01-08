import ReCAPTCHA from "react-google-recaptcha";
import React from 'react'
import { useState } from 'react';
import cont1 from '../../../images/ContactUs/cont2.jpg'
import axios from 'axios';

// const onChange = () => {

// }

const HomeForm = () => {


    const [user, setUser] = useState({

        restaurentname: "",
        managername:"",
        countrycode:"",
        mobilenumber:"",
        state:"",
        city:"",
        address:""
    })
        const handleInput = (e) => {
        let name = e.target.name
        // console.log("names",name)
        let value = e.target.value
        // console.log("value",value)
      

        setUser({
            ...user,
             [name]: value
        })

    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(user)

        try {
            const response = await axios.post('http://localhost:4000/submit-form', user);
            
            if (response.status === 200) {
                console.log('form data submitted successfully!');
                // Reset form fields or handle success
            } else {
                console.error('failed to submit form data');
            }
        } catch (error) {
            console.error('error submitting form data:', error);
        }
        
        
    }
  return (

        <>

            <h1 style={{ textAlign: 'center', marginBottom: '80px', fontSize: '40px' }}>
                Let's Begin with a Demo
            </h1>
            <div className="home-section5">

                <div className='form1'>


                    <form  >
                        <input type="text"
                            placeholder='Restaurent Name'
                            name='restaurentname'
                            id='restaurantname'
                            value={user.restaurentname}
                            onChange={handleInput}
                            required
                        />

                        <br /> <br />

                        <input type="text"
                            placeholder='Restaurent Manager Name'
                            name='managername'
                            id='managername'
                            value={user.managername}
                            onChange={handleInput}
                            required


                        />

                        <br /> <br />

                        <select 
                            
                            id="countrySelect"
                            name="countrycode"
                            value={user.countrycode}
                            onChange={handleInput}
                            >
                           
                            <option value="India">+91 India</option>
                            <option value="USA">+44 Uk</option>
                            <option value="Canada">USA +1</option>
                            

                           
                         
                        </select>


                        <br /> <br />

                        <input
                            type="tel"
                            id="mobilenumber"
                            name="mobilenumber"
                            pattern="[+]91[0-9]{8}"
                            value={user.mobilenumber}
                            onChange={handleInput}
                            placeholder="Manager Mobile Number"
                            required
                        />



                        <br /> <br />

                        <input type="text"
                            placeholder='Enter State'
                            id='state'
                            name="state"
                            value={user.state}
                            onChange={handleInput}
                            required


                        />
                        <br /> <br />

                        <input type="text"
                            placeholder='Enter City'
                            id='city'
                            name='city'
                            value={user.city}
                            onChange={handleInput}
                            required


                        />
                        <br /> <br />

                        <input type="text"
                            placeholder='Enter Address'
                            id='address'
                            name='address'
                            value={user.address}
                            onChange={handleInput}
                            required


                        />
                        <br /> <br />

                        <ReCAPTCHA

                            sitekey="6LfXmEEpAAAAAI5trHR57Fde-9BabKsmGdIAr69f"
                            
                        />,

                        <br /> <br />

                        <button onClick={handleSubmit}>Submit</button>




                    </form>

                </div>


                <div className='img'>
                    <img src={cont1} alt="demo-img" />
                </div>





            </div>




        </>



    )
}

export default HomeForm
