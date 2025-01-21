import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CarritoProvider } from "./context/CarritoContext";

ReactDOM.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>,
  document.getElementById("root")
);
