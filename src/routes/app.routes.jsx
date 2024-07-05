import { Routes, Route } from "react-router-dom";
import { Dish } from "../pages/Dish";
import { Edit } from "../pages/Edit";
import { Favorites } from "../pages/Favorites";
import { History } from "../pages/History";
import { Home } from "../pages/Home";
import { Order } from "../pages/Order";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/dish" element={ <Dish/> }/>
      <Route path="/edit" element={ <Edit/> }/>
      <Route path="/new" element={ <Edit/> }/>
      <Route path="/favorites" element={ <Favorites/> }/>
      <Route path="/history" element={ <History/> }/>
      <Route path="/" element={ <Home/> }/>
      <Route path="/order" element={ <Order/> }/>
    </Routes>
  );
}