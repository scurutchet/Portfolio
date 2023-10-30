import React from 'react';
import {Link} from 'react-scroll';
import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='li'>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='li'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='li'>Works</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='li'>Contact</Link>
    </nav>
  )
}

export default Navbar;