import React from 'react';
import {Link} from 'react-scroll';
import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
        <input type='checkbox' id='hamburguerMenu'></input>
        <label id='menu' for='hamburguerMenu'>
          <span className='closeMenu'>☰</span>
          <span className='openMenu'>X</span>
        </label>
        <div className='responsiveNav'>
          <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='li'>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-60} duration={500} className='li'>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='li'>Works</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='li'>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar;