import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicProtected = () => {
  const { user, isLoading } = useSelector((store) => store.auth);
  if (user) {
    return <Navigate to={"/main"} />;
  }
  if (isLoading) {
    return <h1>Loading state</h1>;
  }

  return <Outlet />;
};

export default PublicProtected;
