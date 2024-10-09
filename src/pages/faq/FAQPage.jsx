import React from 'react'
import FAQ from '../home/FAQ'
import { motion } from 'framer-motion'

const FAQPage = () => {
    return (
        <>
            {/* banner */}
            <motion.section 
            initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className='banner-section inner-baner'>
                <div className='w-layout-blockcontainer base-container w-container'>
                    <div className='inner-page-banner faq-page'>
                        <h1 className="text-white inner-heading">frequently asked questions</h1>
                        <div className="black-overlay"></div>
                    </div>
                </div>
            </motion.section>

            {/* FAQ */}
            <FAQ/>
        </>
    )
}

export default FAQPage