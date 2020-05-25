import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { store } from "./store";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle`
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
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
