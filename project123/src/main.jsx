import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Login from "./Pages/Login";
import Practice from "./Pages/Practice";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Login />
    <Practice />
  </React.StrictMode>
);
