import { Routes, Route, Navigate } from "react-router-dom";
import { Dish } from "../pages/Dish";
import { Favorites } from "../pages/Favorites";
import { History } from "../pages/History";
import { Home } from "../pages/Home";
import { Order } from "../pages/Order";

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/dish" element={ <Dish/> }/>
      <Route path="/favorites" element={ <Favorites/> }/>
      <Route path="/history" element={ <History/> }/>
      <Route path="/" element={ <Home/> }/>
      <Route path="/order" element={ <Order/> }/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
}