import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
        {
    path: "/",
    element: <Home></Home>,
    loader : () => fetch('./FurnitureData.json')
  },
  
  {
    path: "/Products",
    element: <Products></Products>,
  },
  {
    path: "/Wishlist",
    element: <Wishlist></Wishlist>,
  },
    ]
  },
  
]);
 export default router;