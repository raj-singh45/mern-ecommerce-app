
import React from "react";
import { NavLink } from "react-router";
import { useAuth } from "../../../auth/hooks/useAuth";


const Navbar = () => {
   const{logOut} = useAuth()
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          MyStore
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <NavLink
            to="/main"
            end
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-black underline underline-offset-4"
                : "text-gray-600 hover:text-black hover:underline hover:underline-offset-4"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/main/products"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-black underline underline-offset-4"
                : "text-gray-600 hover:text-black hover:underline hover:underline-offset-4"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/main/about"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-black underline underline-offset-4"
                : "text-gray-600 hover:text-black hover:underline hover:underline-offset-4"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/main/contact"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-black underline underline-offset-4"
                : "text-gray-600 hover:text-black hover:underline hover:underline-offset-4"
            }
          >
            Contact
          </NavLink>

        </div>

        {/* Logout */}
        <button  onClick={()=>{logOut()}}    className="rounded-md bg-black px-5 py-2 text-sm text-white hover:bg-gray-800">
          Logout
        </button>

      </div>
    </nav>
  );
};

export default Navbar;


