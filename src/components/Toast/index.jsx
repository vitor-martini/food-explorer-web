import { ToastContainer, ToastMessage, ToastCloseButton } from "./styles";
import { useState, useEffect } from "react";

export function Toast({ toasts, removeToast }) {
  const [visibleToasts, setVisibleToasts] = useState([]);

  useEffect(() => {
    setVisibleToasts(toasts.map((toast) => ({ ...toast, visible: true })));

    const timers = toasts.map((toast) =>
      setTimeout(() => {
        setVisibleToasts((currentToasts) =>
          currentToasts.map((t) =>
            t.id === toast.id ? { ...t, visible: false } : t
          )
        );
        setTimeout(() => {
          removeToast(toast.id);
        }, 500); 
      }, 2500)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [toasts, removeToast]);

  return (
    <ToastContainer>
      {visibleToasts.map((toast) => (
        <ToastMessage
          key={toast.id}
          bgColor={toast.bgColor}
          color={toast.color}
          visible={toast.visible}
        >
          {toast.message}
          <ToastCloseButton onClick={() => removeToast(toast.id)}>×</ToastCloseButton>
        </ToastMessage>
      ))}
    </ToastContainer>
  );
}