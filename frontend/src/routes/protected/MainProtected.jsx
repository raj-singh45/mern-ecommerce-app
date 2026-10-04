import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const MainProtected = () => {
  const { user, isLoading } = useSelector((store) => store.auth);
  if (!user) {
    return <Navigate to={"/"} />;
  }
  if (isLoading) {
    return <h1>Loading state</h1>;
  }

  return <Outlet />;
};

export default MainProtected;
