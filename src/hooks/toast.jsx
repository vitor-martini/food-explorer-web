import { createContext, useState, useContext, useCallback } from "react";
import { Toast } from "../components/Toast";
import { useTheme } from "styled-components";

const ToastContext = createContext();

function useToast() {
  const context = useContext(ToastContext);
  return context;
}

function ToastProvider({ children }) {
  const theme = useTheme();
  const [toasts, setToasts] = useState([]);

  const toastTypes = {
    "ERROR": { bgColor: theme.COLORS.TOMATO_100, color: theme.COLORS.LIGHT_100 },
    "SUCCESS": { bgColor: theme.COLORS.MINT_100, color: theme.COLORS.DARK_100 }
  };

  const addToast = useCallback((message, type) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, bgColor: type.bgColor, color: type.color }]);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toastTypes }}>
      {children}
      <Toast toasts={toasts} removeToast={removeToast} /> 
    </ToastContext.Provider>
  );
}

export { ToastProvider, useToast };
