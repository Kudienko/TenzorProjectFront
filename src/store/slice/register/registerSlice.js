import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../../thunks/registerThunk/registerThunk";

const initialState = {
  user: {},
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { register } = registerSlice.actions;

export default registerSlice.reducer;
