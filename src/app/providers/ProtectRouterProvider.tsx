import Cookies from 'js-cookie';
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router";

import MainPage from "@pages/mainPage";
import LoginPage from "@pages/loginPage";
import AdminPage from "@pages/adminPage";

type ProtectedRouteType = {
  children : React.ReactNode,
}

//프로텍터 라우터 쿠키가없거나 만료시간이 지났으면 라우팅 취소
function ProtectedRoute ({children}:ProtectedRouteType){
  const navigate = useNavigate();
  const exp = Cookies.get('exp');
  const expDate = Number(exp)*1000;
  const nowDate = Date.now();

  useEffect(()=>{
    if(!exp||nowDate >= expDate){
      console.log(exp);
      navigate('/login');
    } 
  },[exp, navigate]);

  
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