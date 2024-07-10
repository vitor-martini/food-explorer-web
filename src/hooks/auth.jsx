import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useToast } from "./toast"; 

export const AuthContext = createContext({});

function AuthProvider({ children }) {  
  const { addToast, toastTypes } = useToast(); 
  const [user, setUser] = useState({});

  async function logIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user } = response.data;
      setUser(user);
      localStorage.setItem("@food-explorer:user", JSON.stringify(user));
    } catch(error) {
      if(error.response) {
        addToast(error.response.data.message, toastTypes.ERROR);
      } else {
        addToast("Não foi possível logar.", toastTypes.ERROR);
      }
    }
  }

  async function logOut() {
    setUser({});
    await api.delete("/sessions");
    localStorage.removeItem("@food-explorer:user");
  }

  useEffect(() => {
    const user = localStorage.getItem("@food-explorer:user");
    if(user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ logIn, logOut, user }}>
      { children }
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };

