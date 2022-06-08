import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Purchase = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const [newQuantity, setNewquantity] = useState();
  const { name, quantity, img, miniumqnt, price } = singleProduct;
  let errElement;

  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:4000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [id]);

  const handleOrder = (e) => {
    e.preventDefault();
    const placeOrder = {
      prodcutNmae: name,
      userName: user.displayName,
      email: user.email,
      price: quantity * price,
      quantity,
    };
    fetch(`http://localhost:4000/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(placeOrder),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
    e.target.reset();
    toast.success("Order Placed Succesfully");
  };

  if (newQuantity > quantity) {
    errElement = <p> {` quantity is less than ${quantity}`}</p>;
  } else if (newQuantity < miniumqnt) {
    errElement = <p>{`must be quantity is getter than ${miniumqnt}`}</p>;
  }

  return (
    <div className="grid grid-cols-2 px-12 gap-5 bg-base-200">
      <div class="card ">
        <p className="mt-4 text-2xl text-orange-300 font-bold">{name}</p>
        <img src={img} alt="Shoes" className="w-[300px] block mx-auto" />
      </div>
      <div className="my-4">
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <div class="card-body ">
            <form onSubmit={handleOrder}>
              <input
                type="text"
                value={user.displayName}
                readOnly
                class="input input-bordered w-full max-w-xs my-4"
              />
              <input
                type="text"
                value={user.email}
                readOnly
                class="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                readOnly
                value={name}
                class="input input-bordered w-full max-w-xs my-4"
              />
              {newQuantity && (
                <>
                  <p> Per unit price :{price}</p>
                  <p>total price : {newQuantity * price}</p>
                  <p>myOrder quantity{newQuantity} </p>
                </>
              )}

              <input
                type="text"
                name="quantity"
                onChange={(e) => setNewquantity(e.target.value)}
                placeholder={`minimum order quantity${miniumqnt}`}
                class="input input-bordered w-full max-w-xs my-4"
              />
              <input
                type="number"
                placeholder="Phone number"
                class="input input-bordered w-full max-w-xs my-4"
              />
              <input
                type="text"
                placeholder="Address"
                class="input input-bordered w-full max-w-xs my-4"
              />

              <p className="text-red-700 text-xl">{errElement}</p>

              <p className="my-4">Available Quantity {quantity}</p>
              <input
                type="submit"
                value="Place order"
                className="btn btn-secondary"
                disabled={newQuantity > quantity || newQuantity < miniumqnt}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
