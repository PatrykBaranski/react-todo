import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import "./styles/global.scss";
import "./styles/normalize.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
