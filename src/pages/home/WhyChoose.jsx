import React from 'react';
import { motion } from 'framer-motion';
import VideoSection from './VideoSection';

const WhyChoose = () => {
  return (
    <section className="section dark-background">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrapper"><h2 className="text-white">Why choose us</h2></div>
        <div className="home-page-dropdown-wrapper">

          <motion.div 
          initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
          animate={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='why-choose-us-card white-card'>
            <h4>Experienced and Professional Team</h4>
            <p className="large-dropdown-paragraph">Our team of highly trained and experienced movers takes pride in delivering top-notch service. With years of experience in the moving industry, we handle your belongings with the utmost care and professionalism.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className='why-choose-us-card'>
            <h4 className="text-white">Comprehensive Services</h4>
            <p className="large-dropdown-paragraph text-white">From residential and commercial moves to packing, storage, and specialty moving, we offer a wide range of services to meet all your moving needs. No matter the size or complexity of your move, we've got you covered.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className='why-choose-us-card'>
            <h4 className="text-white">Personalized Moving Plans</h4>
            <p className="large-dropdown-paragraph text-white">We believe that every move is unique. Our personalized moving plans are tailored to your specific requirements, ensuring that every detail is taken care of. We work closely with you to create a customized plan that fits your schedule and budget.</p>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
          animate={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="why-choose-us-card"><h4 className="text-white">Reliable and Timely</h4><p className="large-dropdown-paragraph text-white">Punctuality and reliability are at the core of our services. We understand the importance of timely deliveries and strive to ensure that your move is completed on schedule. You can count on us to be there when we say we will.</p></motion.div>

        </div>
      </div>
      <VideoSection />
    </section>
  );
};

export default WhyChoose;
