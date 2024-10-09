import React, { useEffect } from 'react'
import jobPositions from '../../utilis/jobPositions'
import LatestPublication from '../home/LatestPublication'
import { motion } from 'framer-motion'

const Career = () => {
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
                    <div className='inner-page-banner career-page'>
                        <h1 className="text-white inner-heading">Career</h1>
                        <div className="black-overlay"></div>
                    </div>
                </div>
            </motion.section>

            {/* details */}
            <section className='section'>
                <div className='base-container w-container'>
                    {/* text */}
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
                    animate={{ opacity: 1, scale: 1, translateY: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="title-wrapper title-with-text">
                        <h2>Join our big family</h2>
                        <p>We are looking for motivated individuals who are passionate about helping people transition smoothly to new homes and offices. At Relocation, you'll have the opportunity to work with a supportive team, develop your skills, and make a real difference in our customers' lives. Explore our current job openings and start your rewarding career with us today!</p>
                    </motion.div>

                    {/* job grid */}
                    <div className='career-collection-list-wrapper w-dyn-list'>
                        <div className='w-dyn-items'>
                            {
                                jobPositions && jobPositions.map((job, index) => (
                                    <div key={index} className='career-list-item-wrapper w-dyn-item'>
                                        <div className="job-position-content-wrap">
                                            <a href="#" className="career-position-wrapper w-inline-block">
                                                <div className="career-title-mobile">Position</div>
                                                <h6 className="job-position-title">{job?.title}</h6>
                                            </a>
                                            <div className="job-details-wrap">
                                                <div className="career-location-wrapper">
                                                    <div className="career-title-mobile">Location</div>
                                                    <div className="career-location">{job?.location}</div>
                                                </div><div className="career-type-wrapper">
                                                    <div className="career-title-mobile">Type</div>
                                                    <div className="career-type">{job?.type}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='career-button-wrapper'>
                                            <a href="#" className="primary-button">Apply now</a>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>
            <LatestPublication/>
        </>
    )
}

export default Career