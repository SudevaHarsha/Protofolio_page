import React from 'react';
import {FaGithub,FaTwitter,FaLinkedinIn,FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="icons_container">
        <div className="icon">
            <FaGithub className='fa'/>
        </div>
        <div className="icon">
            <FaLinkedinIn className='fa'/>
        </div>
        <div className="icon">
            <FaTwitter className='fa' />
        </div>
        <div className="icon">
            <FaFacebook className='fa'/>
        </div>
    </div>
  )
}

export default Footer;