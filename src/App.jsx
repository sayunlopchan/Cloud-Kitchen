import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import HomePage from "./home/HomePage";
import CartPage from "./components/cartPage";
import ProductAdd from "./components/Product/ProductAdd";
import ProductList from "./components/Product/ProductList";
import MostSoldPage from "./components/page/MostSoldPage";
import PopularDishesPage from "./components/page/PopularDishesPage";
import DetailPage from "./components/page/DetailPage";
import Login from "./features/Auth/Login";
import Dashboard from "./features/Admin/Dashboard";
import TakeoutPage from "./components/page/TakeoutPage";

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
        {
          path: "/dashboard",
          element: <Dashboard />
        },
        {
          path: "/cart",
          element: <CartPage />
        },
        {
          path: "/product-add",
          element: <ProductAdd />
        },
        {
          path: "/products",
          element: <ProductList />
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
          path: "/login",
          element: <Login />
        },
        {
          path: "/takeout-location-kitchen-near-me",
          element: <TakeoutPage />
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
