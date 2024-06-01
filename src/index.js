import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store/store";
import { selectToken } from "./store/slice/login/loginSlice";
import { instanceGetUserData, instanceUpdateUserData } from "./utils/axios";



const root = ReactDOM.createRoot(document.getElementById("root"));

instanceUpdateUserData.interceptors.request.use((config) => {
  const state = store.getState();
  const token = selectToken(state);

  if(token)
      config.headers.Authorization = `Bearer ${token}`;

  return config;
}, (error) =>{
  Promise.reject(error);
})


instanceGetUserData.interceptors.request.use((config) => {
    const state = store.getState();
    const token = selectToken(state);

    if(token)
        config.headers.Authorization = `Bearer ${token}`;

    return config;
}, (error) =>{
    Promise.reject(error);
})

root.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
