import React from "react";
import reactdom from "react-dom/client";
import App from "./app";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer";
import "./global.css";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});

const el = document.querySelector("#root");
const root = reactdom.createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
