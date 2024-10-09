import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/features/cartSlice';
import { motion } from 'framer-motion';

const ShopCard = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, price, oldPrice, images, link } = product;

  // handle add to cart 
  const handleAddToCart = (event) => {
    event.preventDefault();
    const quantity = parseInt(event.target.quantity.value, 10);
    dispatch(addItem({ ...product, quantity }));
  };

  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.9, translateY: 30 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
    className='product-card'>
      <a href={link} className='product-link w-inline-block'>
        <div className='cursor-wrapper product-card'>
          <div className='cursor'>View</div>
        </div>
        <div className='black-overlay service-card'></div>
        {
          images && images.length > 0 && (
            <img
              src={images[0]}
              alt={name}
              className='product-image w-full h-full object-cover'
            />
          )
        }
      </a>
      <div className='product-info'>
        <a href={link} className='product-name'>{name}</a>
        <div className='price-wrap'>
          <div className='price'>
            ${price} USD
          </div>
          {oldPrice && (
            <div className='old-price'>
              ${oldPrice} USD
            </div>
          )}
        </div>
        <div className='add-to-cart'>
          <form onSubmit={handleAddToCart} className='w-commerce-commerceaddtocartform default-state'>
            <div className='quantity-wrap'>
              <label className='field-label'>Quantity</label>
              <input
                name='quantity'
                type='number'
                pattern='^[0-9]+$'
                inputMode='numeric'
                min='1'
                className='w-commerce-commerceaddtocartquantityinput quantity'
                defaultValue='1'
              />
            </div>
            <input
             type='submit'
             data-node-type='commerce-add-to-cart-button'
             data-loading-text='Adding to cart...'
             aria-busy='false'
             aria-haspopup='dialog'
             className='w-commerce-commerceaddtocartbutton primary-button'
             value='Add to Cart'
            />
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ShopCard;
