import React, { useEffect } from 'react'
import pricingPackages from '../../utilis/pricingPackages'
import { motion } from 'framer-motion';

const Pricing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>

            {/* banner */}
            <motion.section
                initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className='banner-section inner-baner'>
                <div className='w-layout-blockcontainer base-container w-container'>
                    <div className='inner-page-banner'>
                        <h1 className="text-white inner-heading">Pricing</h1>
                        <div className="black-overlay"></div>
                    </div>
                </div>
            </motion.section>

            {/* pricing details */}
            <section className='section'>
                <div className='w-layout-blockcontainer base-container w-container'>
                    <div className="title-wrapper">
                        <h2>Choose the best plan</h2>
                    </div>

                    {/* pricing */}
                    <div className='pricing-cards-wrapper'>
                        {
                            pricingPackages && pricingPackages.map((pkg, index) => (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
                                    animate={{ opacity: 1, scale: 1, translateY: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                                    className={` pricing-card ${index === 1 ? 'center-card text-black' : ''}`} key={index}>
                                    <div className="pricing-card-content">
                                        <h5 className={`${index === 1 ? ' text-black' : ''}`}>{pkg.name}</h5>
                                        <div className="price-wrapper">
                                            <div className={`big-price-number `}>${pkg.price}</div>
                                            <div className="pricing-card-text">/hour</div>
                                        </div>
                                        <ul role="list" className="white-list list-disc">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx} className={`${index === 1 ? ' text-black' : ''}`}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <a href="/contact-us" className="primary-button dark-background w-button">Choose this plan</a>
                                </motion.div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing