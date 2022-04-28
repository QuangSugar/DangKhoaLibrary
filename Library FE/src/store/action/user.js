import { createAsyncThunk } from "@reduxjs/toolkit";
import usersApi from "../../api/usersApi";

export const register = createAsyncThunk("auth/register", async (user) => {
  try {
    const response = await usersApi.register(user);
    return {
      success: response.data.msg,
      error: null,
    };
  } catch (error) {
    return {
      success: null,
      error: error.response.data.msg,
    };
  }
});
export const updateInfo = createAsyncThunk("user/update", async (user) => {
  try {
    const response = await usersApi.updateInfo(user);
    return {
      success: response.data.msg,
      error: null,
    };
  } catch (error) {
    return {
      success: null,
      error: error.response.data.msg,
    };
  }
});

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    const response = await usersApi.login(user);
    if (response) {
      localStorage.setItem("firstLogin", true);
      localStorage.setItem("access_token", response.data.access_token);
    }
    return {
      success: response.data.msg,
      error: null,
    };
  } catch (error) {
    return {
      success: null,
      error: error.response.data.msg,
    };
  }
});

// export const getToken = createAsyncThunk("auth/get-access-token", async () => {
//   try {
//     const response = await usersApi.getAccessToken();
//     localStorage.setItem("access_token",response.data)
//   } catch (error) {
//     console.log(error.response.data.msg);
//   }
// });

export const getInfor = createAsyncThunk("user/get-infor", async (id) => {
  try {
    const response = await usersApi.getInfor();
    return {
      data: response.data,
      isAdmin: response.data.role === 1 ? true : false
    }
  } catch (error) {
    console.log(error.response.data.msg);
  }
});
