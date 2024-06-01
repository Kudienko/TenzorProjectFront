import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanceUpdateUserData } from "../../../utils/axios";

export const updateUserThunk = createAsyncThunk(
  "/updateUserData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instanceUpdateUserData.put("/api/auth/change", data);
      return response
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);