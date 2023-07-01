// import React from 'react'
import style from './Section9.module.css'
import { FaFacebookF,FaInstagram,FaLinkedinIn ,FaGoogle,FaTwitter} from 'react-icons/fa';

function BuyLinks() {
  return (
    <div className={style.buyLinkWrapper}>
    <h3>Figma</h3>
    <div className={style.buyLinks}>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <FaFacebookF /> Facebook</a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><span><FaLinkedinIn/>Linkedin</span></a>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> <span><FaGoogle/>Google</span> </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> <span><FaTwitter/>Twitter</span> </a>
    </div>
    </div>
  )
}

export default BuyLinks
