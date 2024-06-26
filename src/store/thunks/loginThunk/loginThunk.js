import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanceLogin } from "../../../utils/axios";

export const loginUser = createAsyncThunk(
  "/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instanceLogin.post("/api/auth/login", data);
      return response.data;  // возвращаем data, чтобы было access_token
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
