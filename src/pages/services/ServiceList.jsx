import React from 'react'
import services from '../../utilis/services'
import { motion } from 'framer-motion'

const ServiceList = () => {
    return (
        <>
            <div className='w-dyn-list'>
                <div className='home-page-collection-list w-dyn-items'>
                    {services.map((service, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
                            animate={{ opacity: 1, scale: 1, translateY: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                            key={index}
                            role="listitem"
                            className="service-collection-item w-dyn-item"
                            style={{ opacity: 1 }}
                        >
                            <a
                                href={`/services/${service.link}`}
                                className="service-link w-inline-block"
                            >
                                <div className="black-overlay service-card"></div>
                                <img
                                    src={service.imageUrl}
                                    loading="lazy"
                                    alt={service.title}
                                    className="service-photo"
                                />
                                <div className="cursor-wrapper">
                                    <div className="cursor">Explore</div>
                                </div>
                            </a>
                            <a href={`/services/${service.link}`} className="h4-style-link">
                                {service.title}
                            </a>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ServiceList