// React and Router Imports
import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layout and Routes
import RootLayout from "./RootLayout/RootLayout";
import ProtectedRoute from "./features/Auth/ProtectedRoute";
import * as paths from "./Routes/Path.js";

// Skeleton and Loading Components
import Detail_Skeleton from "./components/Skeleton/Detail_Skeleton.jsx";
import Menu_Skeleton from "./components/Skeleton/Menu_Skeleton.jsx";
import Loading from "./components/Loading/Loading.jsx";

// Admin Features (Lazy Loaded)
const Login = lazy(() => import("./features/Auth/Login"));
const Signup = lazy(() => import("./features/Auth/Signup"));
const Dashboard = lazy(() => import("./features/Admin/Dashboard"));

// User Pages (Lazy Loaded)
const HomePage = lazy(() => import("./home/page/HomePage"));
const MostSoldPage = lazy(() => import("./home/page/MostSoldPage"));
const MostPopularPage = lazy(() => import("./home/page/MostPopularPage"));
const TakeoutPage = lazy(() => import("./home/page/TakeoutPage"));
const CartsPage = lazy(() => import("./home/page/CartsPage.jsx"));
const FillMyForm = lazy(() => import("./home/page/FillMyForm"));
const Payment = lazy(() => import("./home/page/Payment"));
const MenuPage = lazy(() => import("./home/page/MenuPage"));
const FillMyFormTO = lazy(() => import("./home/page/FillMyFormTO"));
const Detailpage = lazy(() => import("./home/page/Detailpage.jsx"));

// Informational Pages (Lazy Loaded)
const Aboutus = lazy(() => import("./home/page/infomaticPage/Aboutus.jsx"));
const ContactPage = lazy(() => import("./home/page/infomaticPage/ContactPage.jsx"));
const Faq = lazy(() => import("./home/page/infomaticPage/Faq.jsx"));
const PrivacyandPolicy = lazy(() => import("./home/page/infomaticPage/PrivacyandPolicy.jsx"));
const TermsandConditions = lazy(() => import("./home/page/infomaticPage/TermsandConditions.jsx"));
const PageNotFound = lazy(() => import("./home/page/PageNotFound"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: paths.LOGIN_PAGE,
          element: (
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: paths.SIGNUP_PAGE,
          element: (
            <Suspense fallback={<Loading />}>
              <Signup />
            </Suspense>
          ),
        },
        {
          path: paths.DASHBOARD_PAGE,
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: paths.CART_PAGE,
          element: (
            <Suspense fallback={<Loading />}>
              <CartsPage />
            </Suspense>
          ),
        },
        {
          path: paths.MOST_POPULAR_PAGE,
          element: (
            <Suspense fallback={<Loading />}>
              <MostPopularPage />
            </Suspense>
          ),
        },
        {
          path: paths.MOST_SOLD_PAGE,
          element: (
            <Suspense fallback={<Loading />}>
              <MostSoldPage />
            </Suspense>
          ),
        },
        {
          path: paths.DETAIL_PAGE,
          element: (
            <Suspense fallback={<Detail_Skeleton />}>
              <Detailpage />
            </Suspense>
          ), // DYNAMIC ROUTE
        },
        {
          path: paths.TAKEOUT_PAGE,
          element: (
            <Suspense fallback={<Loading />}>
              <TakeoutPage />
            </Suspense>
          ),
        },
        {
          path: paths.PAYMENT_FORM_PAGE,
          element: (
            <Suspense fallback={<Loading />}>
              <FillMyForm />
            </Suspense>
          ),
        },
        {
          path: paths.TAKEOUT_FORM_PAGE,
          element: (
            <Suspense fallback={<Loading />}>
              <FillMyFormTO />
            </Suspense>
          ),
        },
        {
          path: paths.PAYMENT_PAGE,
          element: (
            <Suspense fallback={<Loading />}>
              <Payment />
            </Suspense>
          ),
        },
        {
          path: paths.MENU_PAGE,
          element: (
            <Suspense fallback={<Menu_Skeleton />}>
              <MenuPage />
            </Suspense>
          ),
        },
        // Informative pages
        {
          path: paths.ABOUT_US_PAGE,
          element: (
            <Suspense fallback={<Loading />}>
              <Aboutus />
            </Suspense>
          ),
        },
        {
          path: paths.CONTACT_US_PAGE,
          element: (
            <Suspense fallback={<Loading />}>
              <ContactPage />
            </Suspense>
          ),
        },
        {
          path: paths.FAQ_PAGE,
          element: (
            <Suspense fallback={<Loading />}>
              <Faq />
            </Suspense>
          ),
        },
        {
          path: paths.PRIVACY_POLICY_PAGE,
          element: (
            <Suspense fallback={<Loading />}>
              <PrivacyandPolicy />
            </Suspense>
          ),
        },
        {
          path: paths.TERMS_AND_CONDITIONS_PAGE,
          element: (
            <Suspense fallback={<Loading />}>
              <TermsandConditions />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<Loading />}>
              <PageNotFound />
            </Suspense>
          )
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
