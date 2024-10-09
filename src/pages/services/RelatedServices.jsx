import React from 'react'
import { Link } from 'react-router-dom'

const RelatedServices = ({ relatedServices }) => {
    return (
        <section className='section without-top-spacing'>
            <div className='w-layout-blockcontainer base-container w-container'>
                <div className="title-wrapper">
                    <h2>Related services</h2>
                    <a href="/services" className="secondary-button service-section w-button">See all</a>
                </div>
                <div className='w-dyn-list'>
                    <div className='home-page-collection-list w-dyn-items'>
                        {
                            relatedServices.map(service => (
                                <div key={service?.id} className='service-collection-item w-dyn-item'>
                                    <a href={`/services/${service?.link}`} className="service-link w-inline-block">
                                        <div className="black-overlay service-card"></div>
                                            <img src={service?.imageUrl} loading="lazy" alt="" className="service-photo" />
                                            <div className="cursor-wrapper">
                                            <div className="cursor">Explore</div>
                                        </div>
                                    </a>
                                    <a href={`/services/${service?.link}`}       className="h4-style-link">{service?.title}</a>
                                    <p>{service?.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RelatedServices