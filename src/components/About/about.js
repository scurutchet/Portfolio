import React from 'react';
import './about.css';

function About() {
  return (
    <section id='about'>
        <h2>My skills</h2>
        <div className='content'>
            <div className='columns'>
                <h3 className='aTitle'>Technologies</h3>
                <ul className='list'>
                    <li className='item'>HTML</li>
                    <li className='item'>CSS</li>
                    <li className='item'>JavaScript</li>
                    <li className='item'>GIT</li>
                    <li className='item'>Bootstrap</li>
                    <li className='item'>React</li>
                </ul>
            </div>
            <div className='columns'>
                <h3 className='aTitle'>Soft skills</h3>
                <ul className='list'>
                    <li className='item'>Fast learning curves</li>
                    <li className='item'>Hunger for self-improvement</li>
                    <li className='item'>Team player</li>
                    <li className='item'>Atention to detail</li>
                    <li className='item'>Problem solving</li>
                </ul>
            </div>
        </div>
        <button className='cvBtn'>
            <a href='https://docs.google.com/document/d/1_d1NK73rP7lWu8prcT0YQIe3QC8kNSL6WbF61pZyHGA/edit?usp=sharing' target='_blank'>My curriculum</a>
        </button>
    </section>
  )
}

export default About;