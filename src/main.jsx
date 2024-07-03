import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import GlobalStyle from "./styles/global.js";
import { Routes } from "./routes";
import { AuthProvider } from "./hooks/auth.jsx";
import { ToastProvider } from "./hooks/toast.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyle/>
      <AuthProvider>
        <ToastProvider>
          <Routes/>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
