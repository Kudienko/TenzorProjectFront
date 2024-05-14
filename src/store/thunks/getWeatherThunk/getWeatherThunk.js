import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanceWeather } from "../../../utils/axios";

export const getWeatherThunk = createAsyncThunk(
  "/weather",
  async (data, { rejectWithValue }) => {
    try {
      const weather = await instanceWeather.get(`/api/cities/get_weather?lat=${data.lat}&lon=${data.lon}`);
      return weather;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
  