import { createSlice } from "@reduxjs/toolkit";

const products = [
  { id: 1, title: "Book", quantity: 3, total: 18, price: 6 },
  { id: 2, title: "Drone", quantity: 5, total: 20, price: 4 },
  { id: 3, title: "Iphone", quantity: 2, total: 4, price: 2 },
];

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        products
    },
    reducers: {}
});

export default shopSlice.reducer;
