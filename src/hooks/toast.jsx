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

  const addToast = useCallback((message, bgColor, color) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, bgColor, color: color || theme.COLORS.LIGHT_100 }]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast toasts={toasts} removeToast={removeToast} /> 
    </ToastContext.Provider>
  );
}

export { ToastProvider, useToast };
