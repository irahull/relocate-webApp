import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../../utilis/blogPosts';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const BlogDetails = () => {
    const { postLink } = useParams();

    const blogIndex = blogPosts.findIndex(b => b.link === postLink);

    const blog = blogPosts[blogIndex];

    if (!blog) {
        return <div>Post not found</div>;
    }

    // Scroll to the top postion
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [postLink]);

    // Calculate previous and next blog posts
    const prevBlog = blogPosts[blogIndex - 1];
    const nextBlog = blogPosts[blogIndex + 1];

    return (
        <>
            <section className='banner-section inner-baner'
            >
                <div className='w-layout-blockcontainer base-container w-container'>
                    <div className='inner-page-banner blog-post-page'
                     style={{
                        backgroundImage: `url(${blog?.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    >
                        <Link  to={`/blog-posts/${blog.link}`}className="blog-sidebar-post-category">Moving Tips and Tricks</Link>
                        <h1 className="text-white inner-heading">{blog?.title}</h1>
                        <div className="post-info-wrap">
                            <p className="blog-template-date">{blog?.date}</p><p className="blog-template-date">{blog?.author}</p>
                        </div>
                        <div className="black-overlay"></div>
                    </div>
                </div>
            </section>

            <section className='section blog-post-section'>
                <div className='base-container w-container'>
                    <div className='blog-template-wrapper'>
                        <div className="rich-text-style w-richtext">
                            <p>Moving can be a daunting task, but with the right preparation, you can make the process smooth and stress-free. Whether you're moving across town or across the country, careful planning is essential. Here’s your ultimate guide to ensuring a successful move.
                            </p>
                            <ul role="list" className='list-disc'>
                                <li>Create a Moving Checklist:Start by creating a comprehensive moving checklist. Include tasks such as sorting and packing belongings, notifying utility companies, and updating your address. A checklist will help you stay organized and ensure you don't overlook any important steps.</li>
                                <li>Set a Budget:Determine your moving budget early on. Consider costs such as moving supplies, professional movers, transportation, and any potential storage needs. Having a clear budget will help you manage expenses and avoid unexpected costs.</li>
                                <li>Declutter and Organize:Take the opportunity to declutter your home. Sort through your belongings and decide what to keep, donate, or discard. This will make packing more manageable and reduce the volume of items you need to move.</li>
                                <li>Gather Packing Supplies:Stock up on essential packing supplies, including sturdy boxes, bubble wrap, packing tape, and markers. Quality packing materials will protect your belongings during transit.</li>
                                <li>Pack Strategically:Pack room by room and label each box with its contents and the destination room. This will make unpacking easier and help movers know where to place each box in your new home.</li>
                                <li>Hire Professional Movers:Consider hiring professional movers like Relocation to handle the logistics. Experienced movers can save you time and effort, ensuring your belongings are transported safely.</li>
                            </ul>
                            <p>By following these steps, you can ensure a well-organized and stress-free move. At Relocation, we’re here to help with all your moving needs, from packing to transportation. Contact us today to learn more about our services and how we can assist with your next move.
                            </p>
                        </div>

                        {/* prev and next post */}
                        <div className='blog-template-pagination'>
                        {prevBlog && prevBlog ? (
                                <div className='blog-template-prev-button'>
                                    <Link to={`/blog-posts/${prevBlog.link}`} className="blog-template-pagination-link w-inline-block">
                                        <p className="prev-post-arrow"><IoIosArrowRoundBack /></p>
                                        <div>
                                            <p>Previous post</p>
                                            <h6 className="blog-details-link-title">{prevBlog.title}</h6>
                                        </div>
                                    </Link>
                                </div> 
                            ) : <div>No previous blog</div>}

                            <img src="https://cdn.prod.website-files.com/6687b4ef6c504854f62dde21/6687b4ef6c504854f62dde4f_Blog-template-pagination-icon.png" loading="lazy" alt="" className="blog-template-pagination-icon" />

                            {nextBlog && nextBlog ? (
                                <div className='blog-template-next-button'>
                                    <Link to={`/blog-posts/${nextBlog.link}`} className="blog-template-pagination-link w-inline-block">
                                        <div className="blog-template-next">
                                            <p>Next post</p>
                                            <h6 className="blog-details-link-title">{nextBlog.title}</h6>
                                        </div>
                                        <p className="next-post-arrow"><IoIosArrowRoundForward /></p>
                                    </Link>
                                </div>
                            ) : <div>No Next blog</div>}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetails