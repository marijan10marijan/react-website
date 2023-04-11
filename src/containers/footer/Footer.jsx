import React from 'react'
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <section id='footer' className="container footer">
        <div className="footer__containers">
            <div className="footer__left">
                <img className='footer__left-img' src={Logo} alt="logo image in the footer" />
                <h2 className='footer__left-text'>Subscribe for fresh news</h2>
                <input className='footer__left-input' type="email" placeholder='E-mail'/>
            </div>
            <div className="footer__right">
                <h2 className='footer__right-h2'>ADDRESS</h2>
                <p className='footer__right-p'><a href="https://maps.google.com" target='_blank'>20 Tuval Street, Ramat Gan, Israel</a></p>
                <h2 className='footer__right-h2'>PHONE</h2>
                <p className='footer__right-p'><a href="tel:972-507-496-556" target='_blank'>+972 50 749 6556</a></p>
                <h2 className='footer__right-h2'>EMAIL</h2>
                <p className='footer__right-p'><a href="https://mail.google.com" target='_blank'>hi@tlvtech.io</a></p>
            </div>
        </div>
        <p className="footer__copy">Copyright &copy; {new Date().getFullYear()} TLVTech</p>
        <p className="footer__copy">All Rights Reserved.</p>

    </section>
  )
}

export default Footer;
