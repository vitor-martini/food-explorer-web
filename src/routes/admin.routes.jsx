import { Routes, Route } from "react-router-dom";
import { Dish } from "../pages/Dish";
import { Edit } from "../pages/Edit";
import { History } from "../pages/History";
import { Home } from "../pages/Home";
import { Order } from "../pages/Order";
import { Search } from "../pages/Search";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/dish/:id" element={ <Dish/> }/>
      <Route path="/edit/:id" element={ <Edit/> }/>
      <Route path="/history" element={ <History/> }/>
      <Route path="/new" element={ <Edit/> }/>
      <Route path="/order" element={ <Order/> }/>
      <Route path="/search" element={ <Search/> }/>
    </Routes>
  );
}