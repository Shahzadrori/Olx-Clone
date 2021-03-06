import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

ReactDOM.render(
  <>
    <Provider store={store}>
      <Container />
    </Provider>
  </>,
  document.getElementById("screen")
);
