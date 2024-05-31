import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanceGetUserData } from "../../../utils/axios";

export const getUserDataThunk = createAsyncThunk(
  "/getUserData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instanceGetUserData.get("/api/auth/me");
      return response.data;  // возвращаем data, чтобы использовать user data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
