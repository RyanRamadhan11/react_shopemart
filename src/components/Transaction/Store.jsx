// store.js

import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './Reducers'; // Sesuaikan dengan path yang benar

const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});

export default store;
