import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";
import { AdminRoutes } from "./admin.routes";
import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();
  
  function handleRoutes() {
    if(!user.id) {
      return <AuthRoutes/>;
    }

    if(user.is_admin) {
      return <AdminRoutes/>;
    }

    return <UserRoutes/>;
  }
  
  return (
    <BrowserRouter>
      {
        (handleRoutes())
      }
    </BrowserRouter>
  );
}