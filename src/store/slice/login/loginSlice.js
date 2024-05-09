import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../thunks/loginThunk/loginThunk";

const initialState = {
  user: {},
  isLogged: false,
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
    });
  },
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;
