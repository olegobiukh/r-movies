import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import stores from "./redux/store";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  * {
    padding: 0;
    maring: 0;
    box-sizing: border-box;
  }
  `;

ReactDOM.render(
  <>
    <GlobalStyle />
    <Provider store={stores}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
