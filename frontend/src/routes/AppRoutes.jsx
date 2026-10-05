import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { hydrationApi } from "../features/auth/api/AuthApi";
import AuthLayout from "../app/layout/AuthLayout";
import PublicProtected from "./protected/PublicProteced";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import { addUser, setLoading } from "../features/auth/state/authSlice";
import MainProtected from "./protected/MainProtected";
import ProductPage from "../features/product/ui/pages/ProductPage";
import MainLayout from "../app/layout/MainLayout";
import AboutPage from "../features/product/ui/pages/AboutPage";
import ContactPage from "../features/product/ui/components/Contact.Page";

const AppRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await hydrationApi();
        dispatch(addUser(response));
      } catch (error) {
        console.log("User not logged in");
        dispatch(setLoading(false));
      }
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <PublicProtected />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },

    {
      path: "/main",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <MainProtected />,
          children: [
            {
              path: "",
              element: <ProductPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
             {
              path: "contact",
              element: <ContactPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
