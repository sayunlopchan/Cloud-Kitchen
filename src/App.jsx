import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./RootLayout/RootLayout"
import HomePage from "./home/HomePage"
import CartPage from "./components/cartPage"



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