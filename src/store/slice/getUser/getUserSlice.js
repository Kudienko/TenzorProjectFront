import { createSlice } from "@reduxjs/toolkit";
import { getUserDataThunk } from "../../thunks/getUserDataThunk/getUserDataThunk";

const initialState = {
  user: {},
};

const getUserSlice = createSlice({
  name: "getUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserDataThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { user } = getUserSlice.actions;


export default getUserSlice.reducer;
