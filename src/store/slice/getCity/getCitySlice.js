import { createSlice } from "@reduxjs/toolkit";
import { getCityThunk } from "../../thunks/getCityThunk/getCityThunk";

const initialState = {
  city: {}
};

const getCitySlice = createSlice({
  name: "getCity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCityThunk.fulfilled, (state, action) => {
      state.city = action.payload;
    });
  },
});

export const { getCity } = getCitySlice.actions;

export default getCitySlice.reducer;
