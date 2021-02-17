import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider, createClient } from "urql";

import './index.css';

const client = createClient({
  url: "http://localhost:4000/graphql"
})

ReactDOM.render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById("root")
);
