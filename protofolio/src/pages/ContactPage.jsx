import React from 'react';
import Navbar from '../components/Navbar';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_s0x2yhd','template_5v7c1vg',e.target,'vPK75gA9Ebzz3jI4d'
  ).then(res=>{
    console.log(res);
  }).catch(err=>console.log(err))
}
  return (
    <div className="contactPage">
      <Navbar />
      <div className='color-set'>
        <div className="form">
          <div className='form2'>
              <form onSubmit={sendEmail}>
                <div className='input_box'>
                  <input type='text' id="name" name='name' className='input_name' required></input>
                  <label for="name">NAME :</label>
                </div>
                <br /><br />
                <div className='input_box'>
                  <input type='text' id="email" name='email' className='input_name' required></input>
                  <label for="email">E-mail:</label>
                </div>
                <br /><br />
                <div className='input_box'>
                  <textarea rows="10" cols="40" id="comment" name='comment' className='input_name' required></textarea>
                  <label for="comment">Comment:</label>
                </div>
                <button type='submit' className='submit-btn'>submit</button>
              </form>
              
          </div>
          
        </div>
        <div className='sss'></div>
      </div>
    </div>
  )
}

export default ContactPage;