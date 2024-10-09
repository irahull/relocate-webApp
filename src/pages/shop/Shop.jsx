import React, { useState } from 'react';
import ShopCard from './ShopCard';
import { products } from '../../utilis/products';
import Contact from '../../components/Contact';

import {motion} from "framer-motion"

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');



  const categories = ['All', 'Boxes', 'Packaging Films', 'Other', 'Sale'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <motion.section 
      initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
      animate={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className='banner-section inner-baner'>
        <div className='w-layout-blockcontainer base-container w-container'>
          <div className='inner-page-banner shop-banner'>
            <h1 className="text-white inner-heading">Shop</h1>
            <div className="black-overlay"></div>
          </div>
        </div>
      </motion.section>

      <section className='section'>
        <div className='base-container w-container'>
          <div className="shop-tabs w-tabs">
            <div className="shop-tabs-menu w-tab-menu" role="tablist">
              {categories.map(category => (
                <a 
                  key={category}
                  className={`sessions-tab-link w-inline-block w-tab-link ${selectedCategory === category ? 'w--current' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <div>{category}</div>
                </a>
              ))}
            </div>
          </div>
          <div className='shop-category-tabs-content w-tab-content'>
            <div className="shop-category-tabs w-tab-pane w--tab-active" role="tabpanel">
              <div className='w-dyn-list'>
                <div role="list" className="products-collection-list w-dyn-items">
                  {filteredProducts.map(product => (
                    <ShopCard key={product.id} product={product} />
                  ))}
                </div>
                <div role="navigation" aria-label="List" className="w-pagination-wrapper"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact/>
    </>
  );
};

export default Shop;
