import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Order from "../../Order";
import Loading from "../../Sheared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery("repoData", () =>
    fetch(`http://localhost:4000/order?email=${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <h1 className="text-xl font-bold text-center my-10"> My Orders</h1>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th> Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders?.length > 0 &&
                orders.map((order, index) => (
                  <Order
                    key={order._id}
                    order={order}
                    index={index}
                    refetch={refetch}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
