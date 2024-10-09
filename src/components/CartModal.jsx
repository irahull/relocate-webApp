import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa'; // React Icons for the close button
import { useDispatch, useSelector } from 'react-redux';
import { updateItemQuantity, removeItem, selectCartItems } from '../redux/features/cartSlice';

import { motion } from 'framer-motion';

const CartModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Debugging
  useEffect(() => {
    console.log('Cart Items from Redux:', cartItems);
  }, [cartItems]);

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0).toFixed(2);
  };

  // Handle closing of the modal
  const handleClose = () => {
    onClose();
  };

  // Handle quantity update
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Ensure quantity is at least 1
    dispatch(updateItemQuantity({ id, quantity: newQuantity }));
  };

  // Handle item removal
  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div

      className={`fixed z-[1000] inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ transition: 'opacity 300ms' }}
    >
      <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }} 
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed right-0 top-0 w-1/3 bg-white h-full overflow-y-auto transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
        <motion.div 
        className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold">Your Cart</h4>
            <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">
              <FaTimes size={20} />
            </button>
          </div>
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={item.id} className="flex items-center justify-between mb-4">
                  <div>
                    <span className='mr-4 p-1 bg-primary rounded-full'>0{index + 1}</span>
                    <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  </div>

                  <div>
                    <h5 className="text-lg font-medium">{item.name}</h5>
                    <p className="text-gray-600">${Number(item.price).toFixed(2)}</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="">
                    <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-700 mr-4">Remove</button>
                  </div>
                </div>
              ))
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="flex justify-between mt-4">
              <h5 className="text-lg font-semibold">Total Price:</h5>
              <p className="text-lg font-semibold">${calculateTotalPrice()}</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CartModal;
