import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../thunks/loginThunk/loginThunk";

const initialState = {
  token: null,
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.access_token;  // доступ к access_token
    });
  },
});

export const selectToken = (state) => state.login.token;

export default loginSlice.reducer;
