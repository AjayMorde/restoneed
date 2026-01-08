import React from 'react'
import { Link } from 'react-router-dom';
import './UserSignup.css'
const UserSignup = () => {
  return (
    <div>
      <div className="signup-container">
        <form id='signupform' m>
          <h1>Sign-up to RestoNeed</h1>

          <input type="text" placeholder='Enter Your Name' /><br /><br />

          <input type="text" placeholder='Enter Your Email' /><br /><br />

          <input type="password" placeholder='Enter Your Password' /><br />   <br />

          <input type="password" placeholder='Confirm Password' /><br />  <br />

          <button type="submit">Submit</button>

          <div className="userdata">
            <p><span>Already have an account </span><Link to='../login'>Login</Link></p>
           
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserSignup
