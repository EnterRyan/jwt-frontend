import { createBrowserRouter, RouterProvider, useNavigate } from "react-router";
import Cookies from 'js-cookie';

import MainPage from "@pages/mainPage";
import LoginPage from "@pages/loginPage";
import AdminPage from "@pages/adminPage";

type ProtectedRouteType = {
  children : React.ReactNode,
}
function ProtectedRoute ({children}:ProtectedRouteType){
  const navigate = useNavigate();
  const isRefreshToken = Cookies.get('refreshToken');
  console.log(isRefreshToken);
  if(!isRefreshToken){
    navigate('/login');
  }
  return (
  <>{children}</>
  )
}

const Router = createBrowserRouter([
  { index: true, element: (<ProtectedRoute><MainPage /></ProtectedRoute>) },
  { path: "admin", element: (<ProtectedRoute><AdminPage /></ProtectedRoute>)  },
  { path: "login", element: <LoginPage /> },
]);

export const ProtectRouterProvider = ()=>{
  return <RouterProvider router={Router}></RouterProvider>
}