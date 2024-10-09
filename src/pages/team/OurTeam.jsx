import React from 'react'
import teamMembers from '../../utilis/teamMembers'
import { motion } from 'framer-motion'

const OurTeam = () => {
    return (
        <>
            {/* banner */}
            <motion.section className='banner-section inner-baner'
                initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
                <div className='w-layout-blockcontainer base-container w-container'>
                    <div className='inner-page-banner our-team'>
                        <h1 className="text-white inner-heading">Our Team</h1>
                        <div className="black-overlay"></div>
                    </div>
                </div>
            </motion.section>

            {/* CEO Details */}
            <section className='section'>
                <div className='w-layout-blockcontainer base-container w-container'>
                    {/* CEO Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
                        animate={{ opacity: 1, scale: 1, translateY: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className='ceo-grid'>
                        <div id="w-node-_67f138b3-8163-7426-4051-1c47f6b62d09-f62dde84" className="our-team-text-wrapper"><h2>Meet Our Experts</h2><p>At Relocation, our dedicated team is committed to making your move seamless and stress-free. With years of expertise in the moving industry, each member brings a unique set of skills to ensure your belongings are handled with the utmost care. From coordinating logistics to providing excellent customer service and packing solutions, our team works together to deliver exceptional service and support at every step of your move.</p><div className="ceo-name-wrap"><h5>John Anderson</h5><div className="job-position team-page">Founder &amp; CEO</div></div>
                        </div>
                        <img className="team-large-photo" src="https://cdn.prod.website-files.com/6687b4ef6c504854f62dde21/6697998bb7f3723e29dbf845_4995.avif" alt="moving" id="w-node-_6a086a33-547d-4b33-1c27-746e40d97415-f62dde84" loading="lazy" />
                    </motion.div>

                    {/* team grid */}
                    <div className='team-grid team-page'>
                        {
                            teamMembers && teamMembers.map((team, index) => (
                                <div key={index} id='w-node-_8b240de6-259f-cc8b-a4f0-3b6870eba45a-f62dde84' className='team-member-card'>
                                    <img src={team.photoUrl} loading="lazy" alt="moving" className="team-member-photo team-page" />
                                    <div className="team-members-name"><h5>{team.name}</h5><div className="job-position team-page">{team.position}</div></div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeam