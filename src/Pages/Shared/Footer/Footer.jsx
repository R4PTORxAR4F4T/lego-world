import React from 'react';

const Footer = () => {
    return (
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img className='w-16' src="/gamepad.png" alt="" />
          <p>Lego Worlds<br/>Providing reliable tech since 2006</p>
        </div> 
        <div>
          <span className="footer-title">Contact</span> 
          <a className="link link-hover">+880 1850477967</a> 
          <a className="link link-hover">h.oppy@gmail.com</a> 
          <a className="link link-hover">k-block, Halisohor ,Chittagong</a>
        </div> 
        <div>
          <span className="footer-title">Social</span> 
          <a className="link link-hover">Facebook</a> 
          <a className="link link-hover">Twitter</a> 
          <a className="link link-hover">Instagram</a> 
          <a className="link link-hover">skype</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;