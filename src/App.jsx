import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./RootLayout/RootLayout"
import HomePage from "./home/HomePage"
import CartPage from "./components/cartPage"
import Admin from "./components/Product/Admin"
import ProductList from "./components/Product/ProductList"



import MostSoldPage from "./components/page/MostSoldPage"
import PopularDishesPage from "./components/page/PopularDishesPage"
import DetailPage from "./components/page/DetailPage"


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
          path: "/cart",
          element: <CartPage />
        },
        {
          path: "/admin",
          element: <Admin />
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
          path: "/product-detail/:id",  // Add :id to the path
          element: <DetailPage />
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
