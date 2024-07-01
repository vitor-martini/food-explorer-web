import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  async function logIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user } = response.data;
      setUser(user);
      localStorage.setItem("@food-explorer:user", JSON.stringify(user));
    } catch(error) {
      console.log(error);
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível logar.");
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

