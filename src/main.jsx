import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import GlobalStyle from "./styles/global.js";
import { Routes } from "./routes";
import { AuthProvider } from "./hooks/auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyle/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
