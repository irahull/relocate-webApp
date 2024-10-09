import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='base-container w-container'>
        <div className='footer-wrapper'>
          <div className="footer-brand-wrapper">
            <div className="footer-text">Moving without stress</div>
          </div>
          <div className="footer-links-wrapper">
            <a href="https://www.instagram.com/" target="_blank" className="footer-link">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" className="footer-link">Facebook</a>
            <a href="https://www.linkedin.com" target="_blank" className="footer-link">LinkedIn</a>
          </div>
        </div>

        <div className="footer-links-wrap">
          <div className="footer-links-wrapper horizontal">
            <a href="/" className="footer-link">Home 1</a>
            <a href="/home-2" aria-current="page" className="footer-link w--current">Home 2</a>
            <a href="/home-3" className="footer-link">Home 3</a>
            <a href="/about-us" className="footer-link">About Us</a>
            <a href="/pricing" className="footer-link">Pricing</a>
            <a href="/career" className="footer-link">Career</a>
          </div>
        </div>

        <div className="footer-bottom-wrapper">
          <div className="copyright-wrapper">
            <div className="footer-copyright">© Relocation. All Rights Reserved 2024. 
              <a href="/templates/licensing" className="footer-licensing-link">Licensing</a>
            </div>
              <div className="footer-rights-wrapper">
                <div className="footer-rights">
                  <a href="https://www.128.digital/webflow-templates" target="_blank" className="footer-copyright-link">This Templates</a>by 
                  <a href="https://www.128.digital/" target="_blank" className="footer-copyright-link">128.digital. </a>
                </div>
              <div className="footer-rights">Powered by 
                <a href="https://webflow.com/" target="_blank" className="footer-copyright-link">Relocation</a>
              </div></div>
              </div>
              <div className="footer-button-wrap">
                <a href="/shop" className="footer-link-button w-inline-block"><h3>Shop</h3></a>
                <a href="/services" className="footer-link-button primary-color w-inline-block"><h3>SERVICE</h3></a>
                </div>
              </div>
      </div>
    </footer>
  );
};

export default Footer;
