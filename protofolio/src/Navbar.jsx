import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="navwelcome">
                <h4>welcome</h4>
            </div>
            <nav className="navlinks">
                <ul>
                    <li><Link to="/" className='linknav'>Home</Link></li>
                    <li><Link to="/about" className='linknav'>About</Link></li>
                    <li><Link to="/projects" className='linknav'>Projects</Link></li>
                    <li><Link to="/contact" className='linknav'>Contact me</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar;