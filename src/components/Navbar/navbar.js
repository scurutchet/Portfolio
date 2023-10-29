import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Works</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;