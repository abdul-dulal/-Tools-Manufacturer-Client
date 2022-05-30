import React from "react";
import { toast } from "react-toastify";
import prodcut from "../../../assets/images/page-header-bg.png";
const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const img = event.target.img.value;
    const description = event.target.message.value.slice(0, 100);
    const quantity = event.target.quantity.value;
    const miniumqnt = event.target.minquantity.value;
    const price = event.target.price.value;
    const data = { name, img, description, quantity, miniumqnt, price };

    event.target.reset();

    fetch("https://secret-brook-35937.herokuapp.com/product", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
    toast.success("Successfully product Added");
  };
  return (
    <div>
      <div
        style={{ background: `url(${prodcut})` }}
        className="h-[300px] w-full"
      >
        <h1 className="text-2xl font-bold  text-white h-[300px] uppercase  flex items-center justify-center">
          Add <span className="text-orange-300 ml-2">Product</span>
        </h1>
      </div>
      <div class="hero h-[700px] bg-base-200">
        <div class="  w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <h1 className="text-center text-2xl font-bold">
              Add <span className="text-orange-300">Your Best </span>
            </h1>
            <form onSubmit={handleAddProduct}>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                class="input input-bordered w-full max-w-xs my-3"
                required
              />
              <input
                type="text"
                name="img"
                placeholder="image url"
                class="input input-bordered w-full max-w-xs"
                required
              />
              <textarea
                name="message"
                class="textarea textarea-bordered   w-full max-w-xs mt-5"
                placeholder="Description"
                required
              ></textarea>
              <input
                type="number"
                name="quantity"
                placeholder=" Available Quantity"
                class="input input-bordered w-full max-w-xs my-3"
                required
              />
              <input
                type="number"
                name="minquantity"
                placeholder=" Min Order Quantity"
                class="input input-bordered w-full max-w-xs my-3"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                class="input input-bordered w-full max-w-xs my-3"
                required
              />
              <input
                type="submit"
                value="Add Review"
                className="btn btn-success mt-5"
                required
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
