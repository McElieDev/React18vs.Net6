import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import { Provider } from "react-redux";
import App from "./App";
//import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
