// reducers.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  products: [
    { id: 1, name: 'Oreo', price: 50000, quantity: 0 }, // Menambahkan quantity pada produk
    { id: 2, name: 'Smartphone', price: 1500000, quantity: 0 }, // Menambahkan quantity pada produk
    { id: 3, name: 'Kopi', price: 10000, quantity: 0 }, // Menambahkan quantity pada produk
    // ... add more products
  ],
  cart: [],
  quantity: {},
  transaction: {
    isConfirming: false,
    total: 0,
    items: [],
  },
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.products.find((p) => p.id === productId);

      if (product) {
        const existingItem = state.cart.find((item) => item.product.id === productId);

        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          state.cart.push({ product, quantity });
        }

        // Update total price in the transaction
        state.transaction.total = state.cart.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0
        );
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.product.id !== productId);

      // Update total price in the transaction
      state.transaction.total = state.cart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
    },
    clearCart: (state) => {
      state.cart = [];

      // Update total price in the transaction
      state.transaction.total = 0;
    },
    startTransaction: (state) => {
      state.transaction.isConfirming = true;
      state.transaction.items = state.cart;
    },
    cancelTransaction: (state) => {
      state.transaction.isConfirming = false;
      state.transaction.items = [];
    },
    confirmTransaction: (state) => {
      // Code for placing order, populating transaction, etc.
      const transaction = { id: Date.now(), items: state.cart, total: state.transaction.total };
      state.transaction.isConfirming = false;
      state.transaction.items = [];
      state.transaction.total = 0;
      state.transaction.items = [...state.transaction.items, transaction]; // Mengubah array assignment
      state.cart = [];
    },
    updateTotal: (state) => {
      state.transaction.total = state.cart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
    },
    increaseQuantity: (state, action) => {
      const { productId } = action.payload;
      const cartItem = state.cart.find((item) => item.product.id === productId);
    
      if (cartItem) {
        cartItem.quantity += 1;
        cartItem.product.totalPrice = cartItem.quantity * cartItem.product.price;
      }
    
      // Update total price in the transaction
      state.transaction.total = state.cart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
    },
    decreaseQuantity: (state, action) => {
      const { productId } = action.payload;
      const cartItem = state.cart.find((item) => item.product.id === productId);
    
      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity -= 1;
        cartItem.product.totalPrice = cartItem.quantity * cartItem.product.price;
      }
    
      // Update total price in the transaction
      state.transaction.total = state.cart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
    },
    
    
    
  },
});

export const {
  login,
  addToCart,
  removeFromCart,
  clearCart,
  startTransaction,
  cancelTransaction,
  confirmTransaction,
  updateTotal,
  increaseQuantity,
  decreaseQuantity,
} = shopSlice.actions;

export default shopSlice.reducer;
