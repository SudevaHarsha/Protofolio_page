import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navwelcome">
                <h4>welcome</h4>
            </div>
            <nav className="navlinks">
                <ul>
                    <li style={{'--a':1}}><Link to="/" className='linknav'>Home</Link></li>
                    <li style={{'--a':2}}><Link to="/about" className='linknav'>About</Link></li>
                    <li style={{'--a':3}}><Link to="/projects" className='linknav'>Projects</Link></li>
                    <li style={{'--a':4}}><Link to="/contact" className='linknav'>Contact me</Link></li>
                    <li style={{'--a':4}}><Link to="/register" className='linknav'>register</Link></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Navbar;