// src/App.js
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";

// Admin Components
import Login from "./features/Auth/Login";
import Signup from "./features/Auth/Signup";
import Dashboard from "./features/Admin/Dashboard";

// User Components
import HomePage from "./home/page/HomePage";

import MostSoldPage from "./home/page/MostSoldPage";
import MostPopularPage from "./home/page/MostPopularPage";
import NewDetailPage from "./home/page/NewDetailpage";
import TakeoutPage from "./home/page/TakeoutPage";
import FillMyForm from "./home/page/FillMyForm";
import Payment from "./home/page/Payment";
import MenuPage from "./home/page/MenuPage";
import FillMyFormTO from "./home/page/FillMyFormTO";

// Informational Pages

import PageNotFound from "./home/page/PageNotFound";

// Protected Route
import ProtectedRoute from "./features/Auth/ProtectedRoute";

// Route Paths
import * as paths from "./Routes/Path.js";
import CartPage from "./home/page/cartPage.jsx";
import Aboutus from "./home/page/infomaticPage/Aboutus.jsx";
import ContactPage from "./home/page/infomaticPage/ContactPage.jsx";
import Faq from "./home/page/infomaticPage/Faq.jsx";
import PrivacyandPolicy from "./home/page/infomaticPage/PrivacyandPolicy.jsx";
import TermsandConditions from "./home/page/infomaticPage/TermsandConditions.jsx";




const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: paths.LOGIN_PAGE,
          element: <Login />
        },
        {
          path: paths.SIGNUP_PAGE,
          element: <Signup />
        },
        {
          path: paths.DASHBOARD_PAGE,
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: paths.CART_PAGE,
          element: <CartPage />
        },
        {
          path: paths.MOST_POPULAR_PAGE,
          element: <MostPopularPage />
        },
        {
          path: paths.MOST_SOLD_PAGE,
          element: <MostSoldPage />
        },
        {
          path: paths.DETAIL_PAGE,
          element: <NewDetailPage /> //DYMAMIC ROUTE
        },
        {
          path: paths.TAKEOUT_PAGE,
          element: <TakeoutPage />
        },
        {
          path: paths.PAYMENT_FORM_PAGE,
          element: <FillMyForm />
        },
        {
          path: paths.TAKEOUT_FORM_PAGE,
          element: <FillMyFormTO />
        },
        {
          path: paths.PAYMENT_PAGE,
          element: <Payment />
        },
        {
          path: paths.MENU_PAGE,
          element: <MenuPage />
        },


        //  infomative pages
        {
          path: paths.ABOUT_US_PAGE,
          element: <Aboutus />
        },
        {
          path: paths.CONTACT_US_PAGE,
          element: <ContactPage />
        },
        {
          path: paths.FAQ_PAGE,
          element: <Faq />
        },
        {
          path: paths.PRIVACY_POLICY_PAGE,
          element: <PrivacyandPolicy />
        },
        {
          path: paths.TERMS_AND_CONDITIONS_PAGE,
          element: <TermsandConditions />
        },



        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
