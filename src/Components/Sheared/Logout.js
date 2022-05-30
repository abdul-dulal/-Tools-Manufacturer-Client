import React from "react";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";
const Logout = () => {
  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div>
      <label onClick={handleLogout}> Logout</label>
    </div>
  );
};

export default Logout;
