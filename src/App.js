import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Sheared/Footer";
import Dashboard from "./Components/pages/dashboard/Dashboard";
import RequirAuth from "./Components/RequirAuth";
import AddReview from "./Components/pages/dashboard/AddReview";
import MyOrder from "./Components/pages/dashboard/MyOrder";
import Alluser from "./Components/pages/dashboard/Alluser";
import Purchase from "./Components/pages/purchase/Purchase";
import { ToastContainer } from "react-toastify";
import Payment from "./Components/pages/dashboard/Payment";
import AddProduct from "./Components/pages/dashboard/AddProduct";
import NotFound from "./Components/pages/NotFound";
import RequireAdmin from "./Components/pages/dashboard/RequirAdmin";
import ManageOrders from "./Components/pages/dashboard/ManageOrders";
import { PublicRoute } from "./Route/PublicRoute";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <Navbar />
      <Routes>
        {PublicRoute.map(({ path, Component }) => (
          <Route path={path} element={<Component />} />
        ))}
        <Route
          path="/purchase/:id"
          element={
            <RequirAuth>
              <Purchase />
            </RequirAuth>
          }
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="myorder" element={<MyOrder />} />
          <Route path="addreview" element={<AddReview />} />
          <Route index element={<AddProduct />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="manageorder" element={<ManageOrders />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
