import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            {!admin && (
              <li>
                <Link to="/dashboard/myorder"> My Order</Link>
              </li>
            )}
            {!admin && (
              <li>
                <Link to="/dashboard/addreview"> Add Review</Link>
              </li>
            )}

            <li>
              <Link to="/dashboard/addproduct"> Add Product</Link>
            </li>

            <li>
              <Link to="/dashboard/updateuser">Update Profile</Link>
            </li>

            <li>
              <Link to="/dashboard/alluser"> Make Admin</Link>
            </li>
            {admin && (
              <li>
                <Link to="/dashboard/manageorder"> Mange Orders</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
