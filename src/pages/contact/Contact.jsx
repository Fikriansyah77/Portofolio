import React from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa'

import { FiSend } from 'react-icons/fi'

import "./contact.css"

export const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing 
            new projects, creative ideas or opportunities to be part of your 
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title"> Email</span>
                <h4 className="info__desc"> fikriansyah@mhs.itenas.ac.id</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title"> Call Me</span>
                <h4 className="info__desc"> +85224837416</h4>
              </div>
            </div>
          </div>


          <div className="contact__socials">
            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF/>
            </a>

            <a href="https://github.com/Fikriansyah77" className="contact__social-link">
              <FaGithub/>
            </a>

            <a href="https://www.youtube.com/@fikriansyahramdhani2212" 
            className="contact__social-link">
              <FaYoutube/>
            </a>

            <a href="https://www.instagram.com/blueess_c?utm_source=qr&igsh=MWw4ZnZpODN2MG92dQ==" 
            className="contact__social-link">
              <FaInstagram/>
            </a>

          </div>
        </div>

        <form action="" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='Your Name'
              className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="email" placeholder='Your Email'
              className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="text" placeholder='Your Subject'
              className="form__control" />
            </div>


          </div>

          <div className="form__input-div">
            <textarea placeholder='Your Message' className="form__control textarea"></textarea>   
          </div>

          <button className='button'>
            Send Message 
            <span className="button__icon contact__button-icon">
              <FiSend className="icon" />
            </span>
          </button>

        </form>
      </div>
    </section>
  )
}

export default Contact
