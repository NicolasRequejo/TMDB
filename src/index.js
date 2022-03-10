import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bulma/css/bulma.min.css";
import LogContextProvider from "./context/LogContext";
import SearchContextProvider from "./context/SearchContext";

ReactDOM.render(
  <LogContextProvider>
    <SearchContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchContextProvider>
  </LogContextProvider>,

  document.getElementById("root")
);
