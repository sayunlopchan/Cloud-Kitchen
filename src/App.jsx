import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./RootLayout/RootLayout";

// admin 
import Login from "./features/Auth/Login";
import Dashboard from "./features/Admin/Dashboard";
import ProductAdd from "./components/Product/ProductAdd";


// users 
import HomePage from "./home/HomePage";
import CartPage from "./components/cartPage";
import ProductList from "./components/Product/ProductList";
import MostSoldPage from "./components/page/MostSoldPage";
import PopularDishesPage from "./components/page/PopularDishesPage";
import DetailPage from "./components/page/DetailPage";
import TakeoutPage from "./components/page/TakeoutPage";
import FillMyForm from "./components/page/FillMyForm";
import Payment from "./components/page/Payment";

const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },

        // login route
        // in development
        {
          path: "/login",
          element: <Login />
        },

        // admin route
        // in development
        {
          path: "/products",
          element: <ProductList />
        },
        {
          path: "/dashboard",
          element: <Dashboard />
        },
        {
          path: "/product-add",
          element: <ProductAdd />
        },
        // admin route

        // pages routes
        {
          path: "/cart",
          element: <CartPage />
        },
        {
          path: "/popular-dishes",
          element: <PopularDishesPage />
        },
        {
          path: "/most-sold",
          element: <MostSoldPage />
        },
        {
          path: "/product-detail/:id",
          element: <DetailPage />
        },
        {
          path: "/takeout-location-near-me",
          element: <TakeoutPage />
        },
        {
          path: "/fill-my-form",
          element: <FillMyForm />
        },
        {
          path: "/pay-my-order",
          element: <Payment />
        },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
