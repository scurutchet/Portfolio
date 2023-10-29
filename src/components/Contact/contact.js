import React from 'react';
import './contact.css';
import github from'../../assets/github.png';
import linkedin from'../../assets/linkedin.png';
import email from'../../assets/email.png';

function Contact() {
  return (
    <section id='contact'>
        <h2 className='contactTitle'>Contact Me</h2>
        <p>Please fill out the form bellow to discuss any work opportunities.</p>
        <form className='form'>
          <input type='text' className='name labels' placeholder='Your name'></input>
          <input type='email' className='email labels' placeholder='Your e-mail'></input>
          <textarea name='message' className='msg labels' rows='5' placeholder='Your message'></textarea>
          <button type='submit' value='send' className='btn labels'>Submit</button>
          <div className='links'>
            <a href='https://github.com/scurutchet'>
              <img src={github} alt='Github' className='link'></img>
            </a>
            <a href='https://www.linkedin.com/in/samanta-curutchet-8b23b4191/'>
              <img src={linkedin} alt='Linkedin' className='link'></img>
            </a>
            <a href='mailto:samantacurutchet@gmail.com'>
              <img src={email} alt='email' className='link'></img>
            </a>
          </div>
        </form>
    </section>
  )
}

export default Contact;