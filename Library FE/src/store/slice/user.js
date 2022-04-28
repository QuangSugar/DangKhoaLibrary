import { createSlice } from "@reduxjs/toolkit";
import { register, login,getInfor,updateInfo } from "../action/user";

const initialState = {
  pending: false,
  error: null,
  success:null,
  isLogged:false,
  isAdmin: false,
  userInfo:[]
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    checkLogin: (state) => {
      state.isLogged = true;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.pending = true;
      state.error = null;
      state.success = null;
      state.isLogged = false;
    },
    [login.fulfilled]: (state, action) => {
      state.pending = false;
      state.success = action.payload.success;
      state.error = action.payload.error;
      state.isLogged = true;
    },
    [login.rejected]: (state, error) => {
      state.pending = false;
      state.error = error.message;
      state.isLogged = false;
    },
    [register.pending]: (state) => {
      state.pending = true;
      state.error = null;
      state.success = null;
    },
    [register.fulfilled]: (state, action) => {
      state.pending = false;
      state.success = action.payload.success;
      state.error = action.payload.error;
    },
    [register.rejected]: (state, error) => {
      state.pending = false;
      state.error = error.message;
    },
    [updateInfo.pending]: (state) => {
      state.pending = true;
      state.error = null;
      state.success = null;
    },
    [updateInfo.fulfilled]: (state, action) => {
      state.pending = false;
      state.success = action.payload.success;
      state.error = action.payload.error;
    },
    [updateInfo.rejected]: (state, error) => {
      state.pending = false;
      state.error = error.message;
    },
    [getInfor.fulfilled]: (state, action) => {
      state.pending = false;
      state.success = null;
      state.error = null;
      state.userInfo = action.payload.data;
      state.isAdmin = action.payload.isAdmin;
    },
  },
});

export const { updateStart, updateSuccess, updateFailure, getProfile,checkLogin } =
  userSlice.actions;
export default userSlice.reducer;
