import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartVisible: true,
  products: [],
};

const updateProduct = (state, productIndex, product, type) => {
  const updatedProduct = {
    ...product,
    quantity: type === 'increase' ? product.quantity + 1 : product.quantity - 1,
    total: type === 'increase' ? product.total + product.price : product.total - product.price,
  };
  state.products[productIndex] = updatedProduct;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },

    addProductToCart(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      const product = state.products[productIndex];
      if (!product) {
        state.products.push(action.payload.product);
      } else {
        updateProduct(state, productIndex, product, 'increase');
      }
    },

    increaseQuantity(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      const product = state.products[productIndex];
      updateProduct(state, productIndex, product, 'increase');
    },

    decreaseQuantity(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      const product = state.products[productIndex];
      if (product.quantity === 1) {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      } else {
        updateProduct(state, productIndex, product, 'decrease');
      }
    },

    // checkProductExistenceInCart(state, action) {
    //   return state.products.some(product => product.id === action.payload.id);
    // }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
