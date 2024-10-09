import React, { useEffect } from 'react'
import ServiceList from './ServiceList'
import { motion } from 'framer-motion'

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <motion.section
                initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className='banner-section inner-baner'>
                <div className='w-layout-blockcontainer base-container w-container'>
                    <div className='inner-page-banner service-page'>
                        <h1 className="text-white inner-heading">Services</h1>
                        <div className="black-overlay"></div>
                    </div>
                </div>
            </motion.section>

            <section className='section bigger-bottom-padding'>
                <div className='w-layout-blockcontainer base-container w-container'>
                    <div className="title-wrapper"><h2>Find the perfect solution</h2></div>
                    <ServiceList />
                </div>
            </section>
        </>
    )
}

export default Services