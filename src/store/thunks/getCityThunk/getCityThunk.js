import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCity } from "../../../utils/axios";

export const loginUser = createAsyncThunk(
  "/getCity",
  async (data, { rejectWithValue }) => {
    try {
      const city = await getCity.post("/api/get_city", data);
      return city;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
