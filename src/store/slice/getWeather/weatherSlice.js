import { createSlice } from "@reduxjs/toolkit";
import { getWeatherThunk } from "../../thunks/getWeatherThunk/getWeatherThunk";

const initialState = {
  weather: {},
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeatherThunk.fulfilled, (state, action) => {
      state.weather = action.payload;
    });
  },
});

export const { getWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
