import React from "react";

import { useNavigate } from "react-router-dom";
const Order = ({ order, index, refetch }) => {
  const { prodcutNmae, quantity, price, _id, transactionId } = order;
  const navigate = useNavigate();
  const cancelOrder = () => {
    fetch(`https://secret-brook-35937.herokuapp.com/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{prodcutNmae}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        {transactionId ? (
          <div>
            <button className="btn px-8 ">paid</button>
          </div>
        ) : (
          <button
            class="btn btn-xs"
            onClick={() => navigate(`/dashboard/payment/${_id}`)}
          >
            Pay Now
          </button>
        )}
      </td>
      <td>
        {transactionId ? (
          <div className="text-[16px] font-bold">
            <p>TransactionId</p>
            <p> {transactionId}</p>
          </div>
        ) : (
          <button class="btn btn-sm  bg-red-800" onClick={cancelOrder}>
            Cancel Order
          </button>
        )}
      </td>
    </tr>
  );
};

export default Order;
