import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of moving services, including residential and commercial moving, packing and unpacking, storage solutions, specialty moving, and international relocation.',
    },
    {
      question: 'How do you ensure the safety of my belongings?',
      answer: 'Our experienced movers use high-quality packing materials and techniques to secure your items. Additionally, our services include insurance coverage for added peace of mind.',
    },
    {
      question: 'Can you help with packing and unpacking?',
      answer: 'Yes, we provide both full and partial packing services, as well as unpacking services, to make your move as smooth and stress-free as possible.',
    },
    {
      question: 'How far in advance should I book my move?',
      answer: 'We recommend booking your move at least 4-6 weeks in advance, especially during peak moving seasons, to ensure availability and adequate preparation time.',
    },
  ];

  return (
    <section className="section">
      <motion.div 
      initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
      animate={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrapper">
          <h2 className='text-5xl font-bold tracking-wider'>Frequently asked questions</h2>
        </div>
        <div className="accordion-wrapper-one-column">
          <div className="accordion-wrap-one-column">
            {faqs.map((faq, index) => (
              <div key={index} className="accordion-item">
                <button
                  onClick={() => handleToggle(index)}
                  className={`accordion-toggle items-center ${
                    openIndex === index ? 'text-primary' : ''
                  }`}
                >
                  <div className="faq-title-wrapper items-center">
                    <div className="accordion-number">0{index + 1}</div>
                    <h5
                      className={`accordion-title  ${
                        openIndex === index ? 'text-primary text-lg' : ''
                      }`}
                    >
                      {faq.question}
                    </h5>
                  </div>
                  <div className="accordion-icon">
                    {openIndex === index ? <span className='accordion-icon font-bold'>-</span> : '+'}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="accordion-list"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <p className="accordion-list-content">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
