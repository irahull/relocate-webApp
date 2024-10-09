// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { setItemWithExpiry, getItemWithExpiry } from '../../utilis/localStorage';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: getItemWithExpiry('cartItems') || [],
  },
  reducers: {
    addItem: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity; // Update quantity if item already exists
      } else {
        state.items.push(action.payload); // Add new item if it doesn't exist
      }
      
      setItemWithExpiry('cartItems', state.items, 24 * 60 * 60 * 1000); // 1 day in milliseconds
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity; // Update quantity
      }

      setItemWithExpiry('cartItems', state.items, 24 * 60 * 60 * 1000); // 1 day in milliseconds
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      setItemWithExpiry('cartItems', state.items, 24 * 60 * 60 * 1000); // 1 day in milliseconds
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cartItems');
    },
  },
});

export const selectCartItems = (state) => state.cart.items;

export const { addItem, updateItemQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
