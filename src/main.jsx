import React from "react";
import ReactDOM from "react-dom/client";
import AppProviders from "./Providers/AppProviders";
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProviders>
      <Routes />
    </AppProviders>
  </React.StrictMode>,
);
