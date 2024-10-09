import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="banner-section home-2-banner">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="home-2-banner-content-wrapper">
          <motion.div
            id="w-node-_698c717c-7c38-836f-3f34-ff74935c5011-f62dded2"
            initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="home-2-banner-content"
          >
            <h1
              id="w-node-_76752e8e-6338-3263-3996-fe5ff5a5e469-f62dded2"
              className="home-2-banner-heading"
            >
              Making Your <span className="primary-color-text-span">Move</span> Stress-Free
            </h1>
            <p>
              From packing and transporting to unpacking and setting up, Relocation is your trusted
              partner for a smooth and hassle-free move.
            </p>
            <a href="/services" className="secondary-button w-button">
              Learn more
            </a>
          </motion.div>

          <motion.div
            id="w-node-_9af8b1e6-5a0f-9c7d-7810-991acb804476-f62dded2"
            initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="home-2-banner-content photo-wrapper"
          >
            {/* Add image or any content you want to display here */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
