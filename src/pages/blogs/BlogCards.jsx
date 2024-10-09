import React from 'react';
import { blogPosts } from '../../utilis/blogPosts';
import { Link } from 'react-router-dom';

import { motion } from "framer-motion"

const BlogCards = () => {
    return (
        <section className='section bigger-bottom-padding'>
            <div className='w-layout-blockcontainer base-container w-container'>
                <div className="title-wrapper"><h2>Explore our publications</h2></div>
                <div className='w-dyn-list'>
                    <div className='home-page-collection-list w-dyn-items'>
                        {
                            blogPosts.map((post) => (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
                                    animate={{ opacity: 1, scale: 1, translateY: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                                    key={post.id} className='service-collection-item blog-post-item w-dyn-item'>
                                    <Link to={`/blog-posts/${post.link}`} className="service-link blog-link w-inline-block relative group">
                                        <img src={post.imageUrl} loading="lazy" alt={post.title}
                                            className="blog-photo w-full h-full object-cover" />
                                        <div className="cursor-wrapper absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="cursor text-white text-lg font-bold">Explore</div>
                                        </div>
                                    </Link>
                                    <div className='blog-post-name-wrap'>
                                        <Link to={`/blog-posts/${post.link}`} className="blog-post-card-title text-lg font-semibold">{post.title}
                                        </Link>
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
    )
}

export default BlogCards;
