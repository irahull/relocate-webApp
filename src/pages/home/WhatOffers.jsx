import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Residential Moving",
    description: "Whether you're moving across the street or to a nearby town, our local moving services ensure a smooth transition to your new home with minimal stress.",
    image: "https://cdn.prod.website-files.com/6687b4ef6c504854f62dde37/668fd3db937146d56c0ac38a_2148944588.jpg",
    link: "/services/residential-moving",
  },
  {
    id: 2,
    title: "Packing and Unpacking",
    description: "Let our professional team handle the packing from start to finish, ensuring your belongings are securely packed for the journey.",
    image: "https://cdn.prod.website-files.com/6687b4ef6c504854f62dde37/668fd61cb7c0684dcf8f8ed1_132033.jpg",
    link: "/services/packing-and-unpacking",
  },
  {
    id: 3,
    title: "Commercial Moving",
    description: "Minimize downtime and disruptions with our expert office relocation services, designed to get your business up and running in no time.",
    image: "https://cdn.prod.website-files.com/6687b4ef6c504854f62dde37/668fd730875f514c90757bbd_pexels-tima-miroshnichenko-6169032.jpg",
    link: "/services/commercial-moving",
  },
];

const WhatOffers = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (overlayRef.current) {
        const { left, top, width, height } = overlayRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        setCursorPos({ x, y });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="section bigger-bottom-padding">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrapper">
          <h2 className="text-5xl font-bold tracking-wider">What we offer</h2>
          <Link to="/services" className="secondary-button service-section w-button">
            See all
          </Link>
        </div>

        <div className="w-dyn-list">
          <div role="list" className="home-page-collection-list w-dyn-items">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="service-collection-item w-dyn-item"
                initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <a
                  href="/services/residential-moving" className="service-link w-inline-block"><div className="black-overlay service-card"></div><img src="https://cdn.prod.website-files.com/6687b4ef6c504854f62dde37/668fd3db937146d56c0ac38a_2148944588.jpg" loading="lazy" alt="" className="service-photo" /><div data-w-id="7b4bf96c-fce6-3633-1e1f-0829273839de" className="cursor-wrapper">
                    <div className="cursor">Explore</div></div></a>

                <a href="/services/residential-moving" className="h4-style-link">Residential Moving</a>
                <p>Whether you're moving across the street or to a nearby town, our local moving services ensure a smooth transition to your new home with minimal stress.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOffers;
