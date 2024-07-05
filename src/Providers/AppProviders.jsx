import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global";
import { AuthProvider } from "../hooks/auth";
import { ToastProvider } from "../hooks/toast";
import { CartProvider } from "../hooks/cart";

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <ToastProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
