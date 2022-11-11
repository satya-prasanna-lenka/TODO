import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App02 from "./App02";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import stores from "./store02";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
      <App02 />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
