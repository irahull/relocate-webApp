import React from 'react';
import { motion } from 'framer-motion';

// Dummy data for publications
const publications = [
  {
    title: "Why Hire Professional Packers?",
    author: "Miranda Lebenstain",
    date: "July 22, 2024",
    link: "/blog-posts/the-benefits-of-using-professional-packing-services",
    imageUrl: "https://cdn.prod.website-files.com/6687b4ef6c504854f62dde37/6690edcbff131b3d695f14db_2148944590.jpg"
  },
  {
    title: "Tips for a Smooth Moving Day",
    author: "Sam Brook",
    date: "July 22, 2024",
    link: "/blog-posts/tips-for-a-smooth-moving-day",
    imageUrl: "https://cdn.prod.website-files.com/6687b4ef6c504854f62dde37/6690eba718bc882adb84d483_2149086870.jpg"
  },
  {
    title: "Residential Moving",
    author: "Jerry Twist",
    date: "July 22, 2024",
    link: "/blog-posts/residential-moving",
    imageUrl: "https://cdn.prod.website-files.com/6687b4ef6c504854f62dde37/6690ef42ff131b3d6960a2b1_23738.jpg"
  }
];

const LatestPublication = () => {
  return (
    <section className="section bigger-bottom-padding">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrapper"><h2>our latest publications</h2><a href="/services" className="secondary-button service-section w-button">See all</a>
        </div>
        <div className='w-dyn-list'>
          <div className='home-page-collection-list w-dyn-items'>
            {
              publications.map((post, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
                  animate={{ opacity: 1, scale: 1, translateY: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  key={index} className='service-collection-item blog-post-item w-dyn-item'>
                  <a href={post.link} className="service-link blog-link w-inline-block relative group">
                    <img src={post.imageUrl} loading="lazy" alt={post.title}
                      className="blog-photo w-full h-full object-cover" />
                    <div className="cursor-wrapper absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="cursor text-white text-lg font-bold">Explore</div>
                    </div>
                  </a>
                  <div className='blog-post-name-wrap'>
                    <a href={post.link} className="blog-post-card-title text-lg font-semibold">{post.title}
                    </a>
                    <div className="blog-details-wrapper flex space-x-2 text-sm text-gray-500">
                      <div className="blog-post-details">{post.author}</div>
                      <div className="blog-post-details">{post.date}</div>
                    </div>
                  </div>
                </motion.div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPublication;
