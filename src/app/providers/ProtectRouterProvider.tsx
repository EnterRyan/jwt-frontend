import MainPage from "@pages/mainPage";
import LoginPage from "@pages/loginPage";
import AdminPage from "@pages/adminPage";
import { createBrowserRouter, RouterProvider } from "react-router";

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
]);

export const ProtectRouterProvider = ()=>{
  return <RouterProvider router={Router}></RouterProvider>
}