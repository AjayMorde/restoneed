import React from 'react';
import './UserLogin.css';
import { Link } from 'react-router-dom';
const UserLogin = () => {
  return (
    <>
    <div className='login'>
    <div className="login-container">
      <form id='loginform'>
        <h1>Login to RestoNeed</h1>

        <input type="text" placeholder='Enter Your Email' /><br /><br />

        <input type="password" placeholder='Enter Your Password' /><br />

        <button type="submit">Login</button>

        <div className="userdata">
          <p><span>New user? </span><Link to="../signup">Sign-up now</Link></p>
          <p><a href="# ">Forgot password?</a></p>
        </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default UserLogin;
