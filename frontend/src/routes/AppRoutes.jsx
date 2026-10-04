import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { hydrationApi } from "../features/auth/api/AuthApi";
import AuthLayout from "../app/layout/AuthLayout";
import PublicProtected from "./protected/PublicProteced";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import { addUser } from "../features/auth/state/authSlice";
import MainProtected from "./protected/MainProtected";
import ProductPage from "../features/product/ui/pages/ProductPage";
import MainLayout from "../app/layout/MainLayout";



const AppRoutes = () => {
  let dispatch = useDispatch();

 useEffect(() => {
  (async () => {
    try {
      const response = await hydrationApi();
      dispatch(addUser(response));
    } catch (error) {
      console.log("User not logged in");
     } //finally {
    //   dispatch(setLoading(false));
    // }
  })();
}, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout/>,
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
      element: <MainLayout/>,
      children: [
        {
          path: "",
          element: <MainProtected />,
          children: [
            {
              path: "",
              element: <ProductPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
