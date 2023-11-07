import React, {useRef} from 'react';
import './contact.css';
import github from'../../assets/github.png';
import linkedin from'../../assets/linkedin.png';
import email from'../../assets/email.png';
import emailjs, { send } from '@emailjs/browser';

function Contact () {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_uuuuw3x', 'template_0r2jge7', form.current, 'kbfi6HLNE7878kl9Q')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert ('Email sent');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
        <h2 className='contactTitle'>Contact Me</h2>
        <p>Please fill out the form bellow to discuss any work opportunities.</p>
        <form className='form' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name labels' name='from_name' required placeholder='Your name'></input>
          <input type='email' className='email labels' name='from_email' required placeholder='Your e-mail'></input>
          <textarea name='message' className='msg labels' rows='5' required placeholder='Your message'></textarea>
          <button type='submit' value={send} className='btn labels'>Submit</button>
          <div className='links'>
            <a href='https://github.com/scurutchet' target='_blank' rel='noreferrer'>
              <img src={github} alt='Github' className='link'></img>
            </a>
            <a href='https://www.linkedin.com/in/samanta-curutchet-8b23b4191/' target="_blank" rel='noreferrer'>
              <img src={linkedin} alt='Linkedin' className='link'></img>
            </a>
            <a href='mailto:samantacurutchet@gmail.com' target="_blank" rel='noreferrer'>
              <img src={email} alt='email' className='link'></img>
            </a>
          </div>
        </form>
    </section>
  )
}

export default Contact;