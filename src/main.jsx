import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ReactNotifications />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
