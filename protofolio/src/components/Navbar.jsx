import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ani}) => {
  return (
    <>
        <div className="navbar">
            <div className="navwelcome">
                <h4>welcome</h4>
            </div>
            <nav className="navlinks">
                <ul>
                    <li style={{'--a':1}}><Link to="/" className='linknav'>Home</Link></li>
                    <li style={{'--a':2}}><Link to="/about" onClick={ani} className='linknav'>About</Link></li>
                    <li style={{'--a':3}}><Link to="/projects" onClick={ani} className='linknav'>Projects</Link></li>
                    <li style={{'--a':4}}><Link to="/contact" onClick={ani} className='linknav'>Contact me</Link></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Navbar;