import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/login/loginSlice";
import registerSlice from "./slice/register/registerSlice";

const store = configureStore({
  reducer: {
    auth: loginSlice,
    register: registerSlice,
  },
});

export default store;
