import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./RootLayout/RootLayout"
import HomePage from "./home/HomePage"
import CartPage from "./components/cartPage"
import Admin from "./components/Product/Admin"
import ProductList from "./components/Product/ProductList"



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
        }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App