import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/home/Home";
import Login from "./Components/pages/Login/Login";
import Sign from "./Components/pages/Signup/Signup";
import Footer from "./Components/Sheared/Footer";
import Dashboard from "./Components/pages/dashboard/Dashboard";
import RequirAuth from "./Components/RequirAuth";
import Blogs from "./Components/pages/About/Blogs";
import MyProfile from "./Components/pages/dashboard/MyProfile";
import AddReview from "./Components/pages/dashboard/AddReview";
import MyOrder from "./Components/pages/dashboard/MyOrder";
import Alluser from "./Components/pages/dashboard/Alluser";
import Purchase from "./Components/pages/purchase/Purchase";
import MyPortfolio from "./Components/pages/MyPortfolio";
import { ToastContainer } from "react-toastify";
import UpdateProfile from "./Components/pages/dashboard/UpdateProfile";
import Payment from "./Components/pages/dashboard/Payment";
import AddProduct from "./Components/pages/dashboard/AddProduct";
import Allproduct from "./Components/pages/home/Allproduct";
import NotFound from "./Components/pages/NotFound";
import RequireAdmin from "./Components/pages/dashboard/RequirAdmin";
import ManageOrders from "./Components/pages/dashboard/ManageOrders";

function App() {
  // hello from my repo
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/allproduct" element={<Allproduct />} />
        <Route
          path="/purchase/:id"
          element={
            <RequirAuth>
              <Purchase />
            </RequirAuth>
          }
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyProfile />} />
          <Route path="myorder" element={<MyOrder />} />
          <Route path="addreview" element={<AddReview />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="manageorder" element={<ManageOrders />} />
          <Route path="updateuser" element={<UpdateProfile />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route
            path="alluser"
            element={
              <RequireAdmin>
                <Alluser />
              </RequireAdmin>
            }
          />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
