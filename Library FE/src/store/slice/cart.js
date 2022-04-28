import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pendingCart: false,
  errorCart: null,
  successCart: null,
  cart: [],
};

export const userSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    updateStart: (state) => {
      state.pendingCart = true;
      state.errorCart = null;
      state.successCart = null;
    },
    updateSuccess: (state, action) => {
      state.pendingCart = false;
      state.cart = action.payload.data;
      state.successCart = action.payload.success;
    },
    updateFailure: (state,action) => {
      state.pendingCart = false;
      state.errorCart = action.payload.error;
    },
    getCart:(state)=>{
      state.cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
      state.pendingCart = false;
      state.successCart = null;
      state.errorCart = null;
    }
  },
});

export const { updateStart, updateSuccess, updateFailure, getCart } =
  userSlice.actions;
export default userSlice.reducer;
