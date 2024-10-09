import React from 'react';
import { Link, useParams } from 'react-router-dom';
import services from '../../utilis/services';
import RelatedServices from './RelatedServices';


const ServiceDetails = () => {
    const { serviceLink } = useParams();
    const service = services.find(s => s.link === serviceLink);

    if (!service) {
        return <div>Service not found</div>;
    }

    // related services based on titleand limit to 4
    const findRelatedServices = (title) => {

        const keywords = title.split(' ');
        return services
            .filter(s =>
                s.link !== serviceLink &&
                keywords.some(keyword => s.title.toLowerCase().includes(keyword.toLowerCase()))
            )
            .slice(0, 4);
    };

    const relatedServices = findRelatedServices(service.title);
    console.log(relatedServices);

    return (
        <>
            {/* banner */}
            <section className="banner-section inner-baner">
                <div className="w-layout-blockcontainer base-container w-container">
                    <div className="inner-page-banner service-details"
                        style={{
                            backgroundImage: `url(${service?.imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <h1 className="text-white inner-heading">{service?.title}</h1>
                        <div className="black-overlay"></div>
                    </div>
                </div>
            </section>

            {/* details */}
            <section className='section service-description-section'>
                <div className='w-layout-blockcontainer base-container w-container'>
                    <div className='text-wrapper'>
                        <h2>What we offer</h2>
                        <div className="rich-text-style service-description w-richtext"><p>Moving to a new home is an exciting but often stressful experience. At Relocation, we specialize in making residential moves as smooth and hassle-free as possible. Here’s how our comprehensive residential moving services can help you transition to your new home with ease.</p>
                            <ul role="list" className='list-disc'>
                                <li>Comprehensive Planning&zwj;: We start with a detailed moving plan tailored to your specific needs. Our move coordinators work with you to create a timeline and checklist, ensuring nothing is overlooked.</li>
                                <li>Professional Packing: <strong>&zwj;</strong>Our skilled packers use high-quality materials to securely pack your belongings. We handle everything from delicate glassware to bulky furniture, ensuring each item is protected.</li>
                                <li>Safe Transportation: <strong>&zwj;</strong>Our fleet of modern, well-maintained trucks ensures your belongings are transported safely and efficiently. We use the latest equipment to load and unload your items carefully.</li>
                                <li>Unpacking Services:&zwj; O&zwj;n<strong>&zwj;</strong>ce we arrive at your new home, our team can assist with unpacking and setting up your belongings. This service helps you settle in quickly and comfortably.</li>
                                <li>Customer Support: Our customer service team is available to answer any questions and provide updates throughout the moving process. We’re here to ensure your move goes smoothly from start to finish.</li>

                            </ul>
                            <p>At Relocation, we take pride in providing exceptional residential moving services. Whether you’re moving across town or across the country, our experienced team is here to make your move stress-free and successful. Contact us today to learn more about our residential moving services and how we can assist you with your next move.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* related services */}
            {relatedServices.length > 0 && (
                <RelatedServices relatedServices={relatedServices} />
            )}
        </>
    );
};

export default ServiceDetails;
