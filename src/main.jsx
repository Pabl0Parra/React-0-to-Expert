import React from "react";
import ReactDOM from "react-dom/client";
// import CounterApp from "./componets/CounterApp";
import { FirstApp } from "./componets/FirstApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CounterApp value={666} /> */}
    <FirstApp />
  </React.StrictMode>
);
