import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";

// admin 
import Login from "./features/Auth/Login";
import Dashboard from "./features/Admin/Dashboard";
import ProductAdd from "./components/Product/ProductAdd";

// users 
import HomePage from "./home/HomePage";
import CartPage from "./home/page/cartPage";
import ProductList from "./components/Product/ProductList";

// pages
import MostSoldPage from "./home/page/MostSoldPage";
import MostPopularPage from "./home/page/MostPopularPage";
import DetailPage from "./home/page/DetailPage";
import TakeoutPage from "./home/page/TakeoutPage";
import FillMyForm from "./home/page/FillMyForm";
import Payment from "./home/page/Payment";


import MenuPage from "./home/page/MenuPage";
import Signup from "./features/Auth/Signup";

import ProtectedRoute from './features/Auth/ProtectedRoute';

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
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <Signup />
        },

        // admin routes
        {
          path: "/products",
          element: <ProductList />
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          )
        },
        {
          path: "/product-add",
          element: (
            <ProtectedRoute>
              <ProductAdd />
            </ProtectedRoute>
          )
        },

        // other pages
        {
          path: "/cart",
          element: <CartPage />
        },
        {
          path: "/popular-dishes",
          element: <MostPopularPage />
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
        {
          path: "/the-best-bhansha-express-menu",
          element: <MenuPage />
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
