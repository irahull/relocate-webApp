import React from 'react';

const Contact = () => {
  return (
    <section className='form-section'>
      <div className='w-layout-blockcontainer base-container form-container w-container'>
        <img src="https://cdn.prod.website-files.com/6687b4ef6c504854f62dde21/669116fc2a3e97afc3add2ef_12372%20(1).avif" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 1279px) 97vw, (max-width: 1919px) 1200px, 1440px" alt="moving" className="form-image" />
        <div className="black-overlay"></div>
        <div className='home-banner-text-wrapper form-wrapper'>
           <h2 className="form-title">Have a <span className="primary-color-text-span">question</span>? Contact Us
           </h2>
           <div className='w-form'>
            <form className='home-page-form'>
            <input className="form-text-field w-input" maxLength="256" name="name-2" data-name="Name 2" placeholder="Name" type="text" id="name-2" required=""/>
            <input className="form-text-field w-input" maxLength="256" name="email-2" data-name="Email 2" placeholder="Email" type="email" id="email-2" required=""/>
            <textarea required="" placeholder="Your message" maxLength="5000" id="field-2" name="field-2" data-name="Field 2" className="textarea w-input"></textarea>
            <button type="submit" data-wait="Please wait..." className="primary-button w-button" value="Submit">Submit</button>
            </form>
           </div>
        </div>
      </div>
      <div className="bg"></div>
    </section>
  );
};

export default Contact;
