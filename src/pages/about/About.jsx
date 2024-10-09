import React, { useState } from 'react'
import VideoModal from '../../components/VideoModal';
import { motion } from 'framer-motion';

const About = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      {/* banner */}
      <motion.section 
      className='banner-section inner-baner'
      initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
      animate={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <div className='w-layout-blockcontainer base-container w-container'>
          <div className='inner-page-banner'>
            <h1 className="text-white inner-heading">About us
            </h1>
            <div className="black-overlay"></div>
          </div>
        </div>
      </motion.section>

      {/* story */}
      <section className='section'>
        <div className='w-layout-blockcontainer base-container w-container'>
          {/* title and text */}
          <motion.div 
          initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
          animate={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="title-wrapper title-with-text">
            <h2>Our story and idea</h2>
            <p>Relocation was founded with a simple idea: to make moving stress-free and efficient for everyone. With over 15 years of experience in the industry, we’ve grown from a small local operation to a trusted name in residential and commercial moving. Our mission is to provide top-notch moving services with a focus on customer satisfaction, reliability, and innovation.
            </p>
          </motion.div>

          {/* image div */}
          <div className="about-us-image-wrapper">
            <img src="https://cdn.prod.website-files.com/6687b4ef6c504854f62dde21/6697968fa947ab39e1984e54_49831.avif" loading="lazy" className="about-us-image" />
            <img src="https://cdn.prod.website-files.com/6687b4ef6c504854f62dde21/66979690cb734a6266a9bfff_2148890052.avif" alt="moving" id="w-node-_5816ec4c-dc88-f778-11e4-3273b3fa6b57-f62ddea3" className="about-us-image" />
          </div>

          {/* video player */}
          <a   onClick={openModal} className="lightbox-link about-us-page w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog"><div className="video-gradient"><h2 className="text-white video-title">Relocation: how it all began</h2></div><div className="play-button-hover"></div><div className="play-button"></div><div className="play-button-icon"></div></a>
        </div>
      </section>

      {/* video modal */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default About