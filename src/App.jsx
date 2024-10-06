import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";

// admin 
import Login from "./features/Auth/Login";
import Dashboard from "./features/Admin/Dashboard";

// users 
import HomePage from "./home/page/HomePage";
import CartPage from "./home/page/cartPage";

// pages
import MostSoldPage from "./home/page/MostSoldPage";
import MostPopularPage from "./home/page/MostPopularPage";
import NewDetailpage from "./home/page/NewDetailpage";
import TakeoutPage from "./home/page/TakeoutPage";
import FillMyForm from "./home/page/FillMyForm";
import Payment from "./home/page/Payment";


import MenuPage from "./home/page/MenuPage";
import Signup from "./features/Auth/Signup";

import ProtectedRoute from './features/Auth/ProtectedRoute';
import FillMyFormTO from "./home/page/FillMyFormTO";
import Aboutus from "./home/page/infomaticPage/Aboutus";
import TermsandConditions from "./home/page/infomaticPage/TermsandConditions";
import Faq from "./home/page/infomaticPage/Faq";
import PrivacyandPolicy from "./home/page/infomaticPage/PrivacyandPolicy";

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
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
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
          element: <NewDetailpage />
        },
        {
          path: "/takeout-location-near-me",
          element: <TakeoutPage />
        },
        {
          path: "/fill-my-form-payment",
          element: <FillMyForm />
        },
        {
          path: "/fill-my-form-takeout",
          element: <FillMyFormTO />
        },
        {
          path: "/pay-my-order",
          element: <Payment />
        },
        {
          path: "/the-best-bhansha-express-menu",
          element: <MenuPage />
        },




        // infomatic page

        {
          path: "/Aboutus-Bhansha-Express",
          element: <Aboutus />
        },
        {
          path: "/Terms-and-Conditions-Bhansha-Express",
          element: <TermsandConditions />
        },
        {
          path: "/FAQ-Bhansha-Express",
          element: <Faq />
        },
        {
          path: "/Privacy-and-Policy-Bhansha-Express",
          element: <PrivacyandPolicy />
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
