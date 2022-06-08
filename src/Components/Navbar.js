import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logout from "./Sheared/Logout";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
const Navbar = () => {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);
  const navItem = (
    <>
      <li className="text-xl font-semibold">
        <NavLink to="/home">Home</NavLink>
      </li>
      <li className="text-xl font-semibold">
        <NavLink to="/allproduct">AllProduct</NavLink>
      </li>
      {user && (
        <li className="text-xl font-semibold">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}

      <li className="text-xl font-semibold">
        <NavLink to={"/signup"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  "
            >
              {navItem}
            </ul>
          </div>
          <Link
            to={"/"}
            className=" ml-3 text-xl text-primary font-bold uppercase hover:bg-none  sm: hidden sm:hidden lg:block"
          >
            <span className="text-secondary">Bag</span> dom
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <div class="dropdown mr-3 ">
            {user?.displayName ? (
              <label
                tabindex="0"
                class=" text-xl font-semibold cursor-pointer  "
                onClick={() => setClick(!click)}
              >
                {user?.displayName}
              </label>
            ) : undefined}
            <ul
              tabindex="0"
              class={
                click
                  ? "dropdown-content  p-2  rounded-box  bg-base-200 "
                  : "hidden"
              }
            >
              <li>
                <label className="text-xl font-bold hover:bg-secondary mt-3 cursor-pointer">
                  {user && <Logout />}
                </label>
              </li>
            </ul>
          </div>
          {pathname == "/dashboard" ? (
            <label
              tabIndex="0"
              for="my-drawer-2"
              className="btn btn-ghost lg:hidden  btn-primary drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
