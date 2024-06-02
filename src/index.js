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

function getObject(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

instanceUpdateUserData.interceptors.request.use((config) => {
  const token = getObject('access_token').access_token

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
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);
