import React from 'react';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  return (
    <div className="contactPage">
      <Navbar />
      <div className="form">
        <form>
          <div className='input_box'>
            <input type='text' id="name" className='input_name' required></input>
            <label for="name">NAME :</label>
          </div>
          <br /><br />
          <div className='input_box'>
            <input type='text' id="email" className='input_name' required></input>
            <label for="email">E-mail:</label>
          </div>
          <br /><br />
          <div className='input_box'>
            <textarea rows="10" cols="40" id="comment" className='input_name' required></textarea>
            <label for="comment">Comment:</label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage;