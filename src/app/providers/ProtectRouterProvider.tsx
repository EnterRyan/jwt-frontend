import ErrorPage from "../../pages/errorPage";
import MainPage from "../../pages/mainPage";
import LoginPage from "../../pages/loginPage";
import AdminPage from "../../pages/adminPage";
import App from "..";
import { createBrowserRouter, RouterProvider } from "react-router";

const Router = [
  {
    path : "/",
    element : <App/>,
    errorElement: <ErrorPage/>,
    Children : [
      { index: true, element: <MainPage/> },
      { path: "login", element: <LoginPage/> },
      { path: "Admin", element: <AdminPage/> },
    ]
  }
]

export const ProtectRouterProvider = ()=>{
  const router = createBrowserRouter(Router);
  return <RouterProvider router={router}></RouterProvider>
}