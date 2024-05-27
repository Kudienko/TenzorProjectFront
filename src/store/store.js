import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "./slice/login/loginSlice";
import registerSlice from "./slice/register/registerSlice";
import weatherSlice from "./slice/getWeather/weatherSlice";

const store = configureStore({
    reducer: {
        login: loginSlice,
        register: registerSlice,
        weather: weatherSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
