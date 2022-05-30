import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./Sheared/Logout";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
const Navbar = () => {
  const [user] = useAuthState(auth);

  const navItem = (
    <>
      <li className="text-xl font-semibold">
        <Link to="/home">Home</Link>
      </li>
      <li className="text-xl font-semibold">
        <Link to="/blog">Blogs</Link>
      </li>
      <li className="text-xl font-semibold">
        <Link to="/purchase">Purchase</Link>
      </li>
      <li className="text-xl font-semibold">
        <Link to="/myportfolio">MyPortfolio</Link>
      </li>
      <li className="text-xl font-semibold">
        {user && <Link to="/dashboard">Dashboard</Link>}
      </li>
      <li className="text-xl font-semibold">
        {user ? <Logout /> : <Link to={"/login"}> Login</Link>}
      </li>
      <li className="text-xl font-semibold">
        <Link to={"/signup"}>Register</Link>
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
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Bagdom
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {/* <label className="mr-3 font-bold text-xl  ">
            {user.displayName}
          </label> */}
          <label
            tabIndex="0"
            for="my-drawer-2"
            className="btn btn-ghost lg:hidden btn btn-primary drawer-button"
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
