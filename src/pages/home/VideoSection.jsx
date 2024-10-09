import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoModal from '../../components/VideoModal';

const VideoSection = () => {

const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <AnimatePresence>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{ width: '100%', margin: '0 auto' }} className='w-layout-blockcontainer base-container w-container'>
      <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ duration: 0.3 }}
      onClick={openModal} 
        aria-label="open lightbox"
        aria-haspopup="dialog"
        className='lightbox-link w-inline-block w-lightbox'
      >
        <div className="video-gradient"><h2 className="text-white text-5xl video-title">Relocation: Your Trusted Partner in Moving</h2>
        </div>
        <div className="play-button-hover"></div>
        <div className="play-button"></div>
        <div className="play-button-icon">▶</div>
    
      </motion.div>
    </motion.div>
    </AnimatePresence>
   
    <VideoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
    
  );
};

export default VideoSection;

