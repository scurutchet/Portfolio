import React from 'react';
import './home.css';
import foto from '../../assets/foto.jpg';

function Home() {
  return (
    <section id='home'>
        <div className='leftProfile'>
            <img src={foto} alt='profileFoto' className='photo'/>
        </div>
        <div className='rightProfile'>
            <h1 className='hello'>Hello,</h1>
            <h2 className='intro'>I'm <span className='name'>Samanta Curutchet</span></h2>
            <h2 className='front'>Front- End Developer</h2>
            <p className='para'>Passionate about the world of web development and constantly seeking opportunities to learn and grow as a frontend developer.</p>
        </div>
    </section>
  )
}

export default Home;