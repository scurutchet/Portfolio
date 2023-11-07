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
            <a href='https://media.licdn.com/dms/document/media/D562DAQFtfskKDrJIuw/profile-treasury-document-pdf-analyzed/0/1697041449948?e=1699488000&v=beta&t=-ZnsVPGX8qOMrR3ap8EDjkTQE747r4S1Oi6xQx87Ww8' rel='noreferrer' target='_blank'>My curriculum</a>
        </button>
    </section>
  )
}

export default About;