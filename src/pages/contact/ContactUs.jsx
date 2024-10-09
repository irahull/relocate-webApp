import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import Contact from '../../components/Contact';
const ContactUs = () => {
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
                        <h1 className="text-white inner-heading">Contacts</h1>
                        <div className="black-overlay"></div>
                    </div>
                </div>
            </motion.section>

            {/* contact description */}
            <section className='section '>
                <motion.div 
                initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className='w-layout-blockcontainer base-container w-container'>
                    <div className="title-wrapper">
                        <h2 >Get in Touch</h2>
                    </div>
                    <div className="adress-cards-wrapper">
                        <div id="w-node-_0a17bdfe-5f5a-9e3a-c352-4e3b35f98fb8-f62dde7a" className="adress-card" >
                            <h4>London Office</h4>
                            <div className="contacts-3-location-wrapper">
                                <div className="contacts-detail">
                                    <p className="contacts-icon"></p>
                                    <p className="paragraph-no-margin">14 Tottenham Road, London, England</p>
                                </div>
                                <div className="contacts-detail">
                                    <p className="contacts-icon"></p>
                                    <a href="tel:+12345678912" className="paragraph-no-margin">+1 234 567 8912</a>
                                </div>
                                <div className="contacts-detail">
                                    <p className="contacts-icon"></p>
                                    <a href="mailto:relocation@office.com" className="paragraph-no-margin">relocation@office.com</a>
                                </div>
                                </div>
                                <a href="https://www.google.com/maps/d/viewer?ie=UTF8&amp;hl=en&amp;msa=0&amp;z=7&amp;mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&amp;ll=51.470910462064595%2C-0.2021954999999931" target="_blank" className="link-with-icon">Find us on map<span className="text-button-icon"></span></a>
                            </div>
                            <div id="w-node-_0a17bdfe-5f5a-9e3a-c352-4e3b35f98fcf-f62dde7a" className="adress-card" >
                                <h4>Paris Office</h4>
                                <div className="contacts-3-location-wrapper">
                                    <div className="contacts-detail">
                                        <p className="contacts-icon"></p>
                                        <p className="paragraph-no-margin">27 Rue de Berri, Paris, France</p>
                                    </div>
                                    <div className="contacts-detail">
                                        <p className="contacts-icon"></p>
                                        <a href="tel:+12345678912" className="paragraph-no-margin">+1 234 567 8912</a>
                                    </div>
                                    <div className="contacts-detail">
                                        <p className="contacts-icon"></p>
                                        <a href="mailto:relocation@office.com" className="paragraph-no-margin">relocation@office.com</a>
                                    </div>
                                </div>
                                    <a href="https://www.google.com/maps/d/viewer?ie=UTF8&amp;hl=en&amp;msa=0&amp;z=7&amp;mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&amp;ll=51.470910462064595%2C-0.2021954999999931" target="_blank" className="link-with-icon">Find us on map<span className="text-button-icon"></span></a>
                                </div>
                    </div>
                </motion.div>

            </section>

            <Contact/>
        </>
    )
}

export default ContactUs