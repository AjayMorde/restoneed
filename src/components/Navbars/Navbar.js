import React, { useState } from 'react'
import { FaLinkedin,FaInstagram,FaTwitter } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css';
import { Link } from 'react-router-dom';
// import Login from '../../pages/Login';
import logo from  '../../../src/logo.png'







const Navbar = () => {

    const [showIcons, setIcons] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
  
    const handleLinkClick = () => {
      setShowMobileMenu(false); 
      setIcons(false); 
    };

  return (
    <>
    <nav className='mainnavbar'>
        <div className="logo">
          <Link to ="/"><img src= {logo} alt="" /></Link>
        </div>

        {/* menu  link */}

        <div className={
            showIcons ? "menu-link mobile-menu-link" : "menu-link"}>
             <ul className={showMobileMenu ? 'show' : ''}>
            <li>
              <Link to='/' onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/services' onClick={handleLinkClick}>
                Services
              </Link>
            </li>
            <li>
              <Link to='/product' onClick={handleLinkClick}>
                Product
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link to='/login' onClick={handleLinkClick}>
                Login
              </Link>
            </li>

             
            </ul>
        </div>

        {/* social links  */}

        <div className="social-media ">
            <ul className='socail-apps-for-desktop'>
                <li>
                    <a href="# "> 
                    <FaLinkedin className='linkedin' size={26}/></a>
                </li>

                <li>
                    <a href="# "> 
                    <FaInstagram className='instagram' size={26}/></a>
                </li>

                <li>
                    <a href="# "> 
                    <FaTwitter className='twitter' size={26}/></a>
                </li>

            </ul>
            <div className="hamburger-menu">
                <a href=" #" onClick={() => setIcons(!showIcons)}>
                    <GiHamburgerMenu/>
                </a>

            </div>
        </div>
    </nav>

    
   </>
  )
}

export default Navbar