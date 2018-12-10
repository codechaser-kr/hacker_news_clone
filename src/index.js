import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "component/app";
import storeFactory from "store";

import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "stylesheet/app.css";

const store = storeFactory();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
