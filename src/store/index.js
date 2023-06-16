import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart/cart.slice";

import shopReducer from "./shop/shop-slice";

const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
  },
});

export default store;
