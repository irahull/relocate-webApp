import React, { useEffect } from 'react'
import BlogCards from './BlogCards'
import Contact from '../../components/Contact'
import {motion} from "framer-motion"


const Blogs = () => {
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
                    <div className='inner-page-banner'>
                        <h1 className="text-white inner-heading">Blog</h1>
                        <div className="black-overlay"></div>
                    </div>
                </div>
            </motion.section>
            <BlogCards/>
            <Contact/>
        </>
    )
}

export default Blogs