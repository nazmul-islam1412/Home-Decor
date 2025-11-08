import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children : [
        {
    path: "/Home",
    element: <Home></Home>,
  },
    ]
  },
  
  {
    path: "/Products",
    element: <Products></Products>,
  },
]);
 export default router;