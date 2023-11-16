import React from 'react';
import './works.css';
import foto1 from '../../assets/img1.png';
import foto2 from '../../assets/img2.png';
import foto3 from '../../assets/img3.png';

function Works() {
  return (
    <section id='works'>
      <h2>My work</h2>
      <div className='cards'>
        <div className='project'>
          <img src={foto1} alt='website image'></img>
          <h3>HTML CSS</h3>
          <a href='https://github.com/scurutchet/DesarrolloWeb.git' target='_blank' rel='noreferrer'>Ver en Github</a>
        </div>
        <div className='project'>
        <img src={foto2} alt='website image'></img>
          <h3>HTML CSS JS</h3>
          <a href='https://github.com/scurutchet/JS-con-HTML.git' target='_blank' rel='noreferrer'>Ver en Github</a>
        </div>
        <div className='project'>
        <img src={foto3} alt='website image'></img>
          <h3>HTML CSS JS React</h3>
          <a href='https://github.com/scurutchet/Portfolio.git' target='_blank' rel='noreferrer'>Ver en Github</a>
        </div>
      </div>
    </section>
  )
}

export default Works;