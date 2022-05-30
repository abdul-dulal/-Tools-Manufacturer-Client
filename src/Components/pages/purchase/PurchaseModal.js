import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const PurchaseModal = ({ singleProduct, id }) => {
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState([]);
  const quantity = singleProduct?.quantity;
  const handleDeliverd = () => {
    console.log("click");
    const newQuantity = quantity - 1;
    const updateQuantity = { ...singleProduct, quantity: newQuantity };
    setProduct(updateQuantity);
    const url = `https://vast-forest-98609.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    });
  };
  return <div></div>;
};

export default PurchaseModal;
