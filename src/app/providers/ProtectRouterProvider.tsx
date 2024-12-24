import { createBrowserRouter, RouterProvider } from "react-router";
import MainPage from "@pages/mainPage";
import LoginPage from "@pages/loginPage";
import AdminPage from "@pages/adminPage";
// import LoginForm from "@pages/loginPage/components/LoginForm";

import '../styles/test.css'
import NormalInput from "@shared/components/items/NormalInput";

type ProtectedRouteType = {
  children : React.ReactNode,
}
function ProtectedRoute ({children}:ProtectedRouteType){
  return (
  <>{children}</>
  )
}

const Router = createBrowserRouter([
  { index: true, element: (<ProtectedRoute><MainPage /></ProtectedRoute>) },
  { path: "admin", element: (<ProtectedRoute><AdminPage /></ProtectedRoute>)  },
  { path: "login", element: <LoginPage /> },
  { path: "test", element: <Test /> },
]);

export const ProtectRouterProvider = ()=>{
  return <RouterProvider router={Router}></RouterProvider>
}

export default function Test(){
  return (
    <div className="test-components">
      <NormalInput type={"text"} labelText={"안뇽"}/>
    </div>
  )
}