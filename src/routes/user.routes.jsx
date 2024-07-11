import { Routes, Route, Navigate } from "react-router-dom";
import { Dish } from "../pages/Dish";
import { History } from "../pages/History";
import { Home } from "../pages/Home";
import { Order } from "../pages/Order";
import { Search } from "../pages/Search";

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/dish/:id" element={ <Dish/> }/>
      <Route path="/history" element={ <History/> }/>
      <Route path="/favorites" element={ <Search/> }/>
      <Route path="/order" element={ <Order/> }/>
      <Route path="/search" element={ <Search/> }/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
}