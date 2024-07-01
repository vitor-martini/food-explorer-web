import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {
  const user = localStorage.getItem("@food-explorer:user");

  return (
    <Routes>
      <Route path="/" element={ <Login/> }/>
      <Route path="/signup" element={ <SignUp/> }/>
      {!user && <Route path="*" element={<Navigate to="/"/>}/>}
    </Routes>
  );
}