import React from 'react';
import {FaGithub,FaTwitter,FaLinkedinIn,FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="icons_container">
        <a href="https://github.com/SudevaHarsha" className="icon">
            <FaGithub className='fa'/>
        </a>
        <a href='https://www.linkedin.com/in/sudeva-harsha-718906255' className="icon">
            <FaLinkedinIn className='fa'/>
        </a>
        <div className="icon">
            <FaTwitter className='fa' />
        </div>
        <a href='https://www.facebook.com/sudeva.harsha' className="icon">
            <FaFacebook className='fa'/>
        </a>
    </div>
  )
}

export default Footer;