import React from 'react'
import testimonials from '../../utilis/testimonials'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className='banner-section inner-baner'>
                <div className='w-layout-blockcontainer base-container w-container'>
                    <div className='inner-page-banner faq-page'>
                        <h1 className="text-white inner-heading">Testimonials</h1>
                        <div className="black-overlay"></div>
                    </div>
                </div>
            </motion.section>

            {/* review div */}
            <section className='section'>
                <div className='base-container w-container'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
                        animate={{ opacity: 1, scale: 1, translateY: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="title-wrapper title-with-text">
                        <h2>What our customers say</h2><p>We pride ourselves on providing exceptional service and ensuring our customers have a seamless moving experience. But don't just take our word for it—read what satisfied clients say about their experiences with us.</p>
                    </motion.div>

                    {/* testimoinals */}
                    <div className='testimonials-card-wrapper'>
                        {
                            testimonials && testimonials.map((testimonial, index) => (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
                                    animate={{ opacity: 1, scale: 1, translateY: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                                    key={index} className='testimonials-card-item'>
                                    <div className="testimonials-card-icon"></div>
                                    <p className="testimonials-card-content">{testimonial.content}</p>
                                    <h4 className="testimonials-card-title">{testimonial.name}</h4>
                                    <p className="testimonials-card-date">{testimonial.date}</p>
                                </motion.div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials